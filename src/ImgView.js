import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import UI from './UI';
import {Link} from "react-router-dom";
import MainNavBar from './MainNavBar';
import Footer from './Footer';

import './UI.css';

class ImgView extends Component{
    constructor(props){
        super(props);
        this.state={
            urlImg:'',
            imgUrl:props.location.imgUrl,
            brands:props.location.brands,
            offset:0,
            perPage:4,
            img:'',
            name:'',
            code:'',
            brand:'',
            color:'',
            material:'',
            price:'',
            type:'',
            size:'',
            category:'',
            propsimg:props.location.img,
            propsname:props.location.name,
            propscode:props.location.code,
            propsbrand:props.location.brand,
            propscolor:props.location.color,
            propsmaterial:props.location.material,
            propsprice:props.location.price,
            propstype:props.location.type,
            propssize:props.location.size_type,
            propscategory:props.location.category_name
        };

      console.log(this.state.propsimg)
      console.log(this.state.brands)

    }
 componentDidMount(){



       
    //     const url="http://localhost/php_rest_myblog/api/post/read.php";
    //     const response=await fetch(url
    //       ,
    //       {
    //         method: 'GET',
    //       // mode: "no-cors",
    //       //  headers: {
    //       //     'Accept': 'application/json',
    //       //     'Content-Type': 'application/json',
    //       // }
    //     }
      
    //   );
    //     const data= await response.json();
    //    this.setState({brands:data.data});
    //    console.log(this.state.brands)
  
    //   this.setState({
    //       urlImg:(this.props.urlImg),
    //     brands:(this.props.brands),
    //     propsname:(this.props.name),
    //     propscode:(this.props.code),
    //     propsbrand:(this.props.brand),
    //     propsprice:(this.props.price),
    //     propsmaterial:(this.props.material),
    //     propstype:(this.props.type),
    //     propscolor:(this.props.color),
    //     propscategory:(this.props.category),
    //     propssize:(this.props.size),
    //     propsimg:(this.props.src)
        
    // })
    this.setState({
        pageCount: Math.ceil(this.state.brands.length / this.state.perPage),
      })

 
    }

    handlePageClick=(e)=>{
        const selectedPage = e.selected;

        const offset = selectedPage * this.state.perPage;
      
        console.log(e.selected);
        this.setState({
            currentPage: e.selectedPage,
            offset: offset
        });
    }
    img =(img,name,code,brand,color,material,price,type,category_name,size_type) =>{
        this.setState({
            propsimg: img,
            propsname: name,
           propscode: code,
            propsbrand: brand,
            propscolor: color,
            propsprice: price,
            propstype: type,
            propsmaterial: material,
            propscategory: category_name,
            propssize: size_type
  
  
        })
        
    }
    render(){
       
      const  slice=this.state.brands.slice(this.state.offset,this.state.offset+this.state.perPage)

    
        // console.log(this.props.brands)
        return(
            <div>
                <MainNavBar/>
            <div className="container-fluid">
                 {/* breadcrumb */}
                
         <nav aria-label="breadcrumb" >
             <ol className="breadcrumb" >
              <li className="breadcrumb-item">Home</li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item">Brands</li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item">{this.state.propsbrand}</li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item active" aria-current="page">{this.state.propsbrand} {this.state.propsmaterial} {this.state.propstype} {this.state.propscategory} {this.state.propssize}</li>
               </ol>   
               <hr style={{marginTop:'-20px'}}></hr>
               </nav>
            

            <div className="row pt-3 pb-3 bg-light">
                <div className="col-lg-5 col-md-6 px-lg-5 px-md-5 ">
                    <img className="propImg" src={this.state.propsimg}></img>

                </div>
                <div className="col-lg-7 col-md-6 pt-lg-2 pt-md-2 pt-sm-4 pt-4 px-lg-5 px-md-5 px-sm-4 px-4">
                  <p className="propfirstheading ">{this.state.propscategory}</p>  
                  <p className="propname ">{this.state.propsname}</p>
                  <p className="propprice">PKR {this.state.propsprice}</p>
                  <p className="propcolor"><span className="propsubhead">COLOR:</span>&nbsp; {this.state.propscolor}</p>
                 <span class="dot mb-3" style={{backgroundColor:`${this.state.propscolor}`,height:'30px',width:"30px"}}></span>
     
                 <p className="propsubhead1">QTR: &nbsp; &nbsp; <span className="quantitycalculator px-2 p-1"><i class="minus icon small"></i><input type="number"></input><i class="plus icon small"></i></span></p>
                 <button className="btn addcartbtn px-5 mt-4 pt-2 pb-2">Add to Cart</button>

                 <h4>ADDITIONAL INFORMATION</h4>
                 <hr></hr>
                 <table className="additionaltable">
                     <tr>
                         <th  className="px-4 pt-2 pb-2" >SKU</th>
                         <td className="td px-4 pt-2 pb-2">{this.state.propsname}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Brand</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propsbrand}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Material</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propsmaterial}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Color</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propscolor}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Size</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propssize}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Type</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propstype}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Code</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propscode}</td>
                     </tr>
                     <tr>
                         <th className="px-4 pt-2 pb-2">Category</th>
                         <td className=" td px-4 pt-2 pb-2">{this.state.propscategory}</td>
                     </tr>
                 </table>


                </div>
            </div>

            <div className='row'>
         
              
                <div className="likecol col-lg-4 col-md-7 pt-lg-5 pt-md-5 pt-4">
                <h2 className="youmaylikeheading pt-5"><span>YOU MAY ALSO LIKE</span></h2>
                </div>
                </div>
                <div className="row pt-5">
             
                {slice.map(brand=>

                   <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-lg-5 px-md-5 " >
                      
                      <img src={this.state.imgUrl + brand.image} className="youmaypics" 
                      

                      
                    onClick={() =>this.img(this.state.imgUrl
                                                  + brand.image ,(brand.name),(brand.code),(brand.brand),
                                                      (brand.color) ,(brand.material ),(brand.price),  (brand.type),
                                                        (brand.category_name) ,(brand.size_type)
                                                      )} />
                                                      
                      <div className="row">
                                                     <div className="col-lg-7 col-md-7 col-12" >
                                                      <p className="brandsdatacategory mt-2" > {brand.category_name}  </p>
                                                      </div>
                                                      <div className="col-lg-5 col-md-5 col-12 " style={{fontSize:"13px"}} >
                                                      <p className="brandsdataprice">PKR {brand.price}</p>
                                                      </div>
                                                   </div>
                                                  
                                                   
                                                   
                                          
                      
                    
                   </div>
                   
)}
       
                   </div>
              <div className="mt-5 ">
                   <ReactPaginate 
                      previousLabel={"<"}
                      nextLabel={">"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={this.state.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}/>
                      </div>
            </div>
            <Footer/>
            </div>

        )
    }
}
export default ImgView;