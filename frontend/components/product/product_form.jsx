import React from 'react';
import Dropzone from 'react-dropzone';
import {withRouter} from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.product ;
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.onPhotoDrop = this.onPhotoDrop.bind(this);
    }

    componentDidMount(){
        if(this.props.formType === "update"){
            this.props.fetchProduct(this.props.match.params.productId);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.productId != prevProps.product.id){
            this.props.fetchProduct(this.props.match.params.productId).then(()=> {
                this.setState(this.props.product)
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', parseFloat(this.state.price).toFixed(2));
        formData.append('product[user_id]', this.state.user_id);
        if(this.state.photoFile === ""){
            this.setState({photoFile: null})
        }
        if (this.state.photoFile) {
          formData.append('product[photo]', this.state.photoFile);
        }
        if(this.props.formType === 'update'){
            formData.append('product[id]', this.state.id);
        }
        this.props.processForm(formData).then(payload =>{
            return this.props.history.push(`/products/${payload.product.id}`)
        }
          );
        
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        }
    }

    onPhotoDrop(files){
        const reader = new FileReader();
        const file = files[0];
        reader.onloadend = () =>
        this.setState({ photoUrl: reader.result, photoFile: file});

        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ photoUrl:"", photoFile: null });
        }           
    }

    renderErrors(){
        return( 
            <ul className="errors"> 
                {this.props.errors.map( (error, i ) => {
                   return <li key ={`error-${i}`}> {error}</li>
                })}
            </ul>
        )
    }

    renderPreview() {

        if(this.state.photoUrl === "" ){
            return null;
        }else{
            return (
                <div className="preview">
                <img src={this.state.photoUrl} />
                </div>
            )
        }
    }
    

    render() {
        let header;
        if(this.props.formType === 'update'){
            header = "Update Product";
        }else{
            header = "Add a new listing";
        }
        return (
            <div className="product-form-container">
                <h2 className="product-header">{header}</h2>
                {this.renderErrors()}
                    <div className = 'product-image-upload'>
                           <div className="photo-instructions">
                                <h1> Photo</h1>
                                <p> Add a photo to attract buyers to your product!</p>
                                <ul>
                                    Tips:
                                    <li>Use natural light and no flash.</li>
                                    <li>Include a common object for scale</li>
                                    <li>Show the item being held, worn, or used.</li>
                                    <li>Shoot against a clean, simple background.</li>
                                </ul>
                           </div>
                            {this.renderPreview()}
                            <div className="dropzone">
                            <Dropzone
                                accept="image/*"
                                onDrop={this.onPhotoDrop.bind(this)}
                            >   
                                {({getRootProps, getInputProps}) => (
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div className="dropzone-text">
                                            <i className="fas fa-camera" aria-hidden="true" />
                                            <p> Drag in your photo or click here to upload</p>
                                        </div>
                                    </div>
                                  )
                                }
                            </Dropzone>
                            </div>
                    </div>
   
                    <form onSubmit={this.handleSubmit} className='product-form'>
                             <h1> Listing details</h1>
                             <p> Tell the planet about your listing!</p>
                        <label htmlFor="title">
                          Title*
                          <input type='text' 
                            id="title"
                            value={this.state.title} 
                            onChange={this.update("title")}/>
                        </label>
                        <label htmlFor="description">
                            Description*
                            <textarea
                                id='description'
                                value={this.state.description} 
                                onChange={this.update("description")}/>
                        </label>
                        <label htmlFor="price">
                            Price*
                            <input type='number' 
                                id="price"
                                step='0.01' 
                                placeholder='0.00'
                                value={this.state.price} 
                                onChange={this.update("price")}/>
                        </label>

                        <input type='submit' value="Save and continue"/> 
                    </form>
            </div>
        )
    }

}

export default withRouter(ProductForm);