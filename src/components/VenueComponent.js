import axios from 'axios';
import React, { Component } from 'react';
import { FormControl, InputGroup ,Card ,CardImg,Button, Pagination} from 'react-bootstrap';
import Header from './HeaderComponent';
import Accordian from './accordian/Accordian';

export default class Venues extends Component{
  constructor(props){
    super(props);
    this.state={
      venues:[],
      result:[],
      currentPage : 1,
      usersPerPage : 4,
      search:'',
    }
    this.RenderMenuItem = this.RenderMenuItem.bind(this);
    this.handleCategory = this.handleCategory.bind(this)
  }
  handleCategory = (id,name)=> {
    console.log(id);
    this.props.history.push({ 
      pathname: `/venues/${name}`,
      state: {id: id}
    });
  } 
  componentDidMount(){
    this.findAll();
  }
  findAll(){
    const url = 'http://localhost:8080/venue/getvenues';
    axios.get(url)
    .then((response)=>{
        this.setState({
          result:response.data,
          venues:response.data
        })
    })
  }
  changePage = (a,event) => {
    console.log("vijay");
    this.setState({
        currentPage: a
    });
  };

  firstPage = () => {
      if(this.state.currentPage > 1) {
          this.setState({
              currentPage: 1
          });
      }
  };

  prevPage = () => {
      if(this.state.currentPage > 1) {
          this.setState({
              currentPage: this.state.currentPage - 1
          });
      }
  };

  lastPage = () => {
      if(this.state.currentPage < Math.ceil(this.state.venues.length / this.state.usersPerPage)) {
          this.setState({
              currentPage: Math.ceil(this.state.venues.length / this.state.usersPerPage)
          });
      }
  };

  nextPage = () => {
      if(this.state.currentPage < Math.ceil(this.state.venues.length / this.state.usersPerPage)) {
          this.setState({
              currentPage: this.state.currentPage + 1
          });
      }
  };

  RenderMenuItem ({dish}) {
    return (
        <Card className="p-2"  onClick={() => this.handleCategory(dish.id,dish.name)}>
          <div className="row no-gutters">
            <div className="col-md-4">
            <CardImg width="100%" src={dish.image} alt={dish.name} /> 
            </div>   
            <div className="col-md-8">  
            <Card.Body>
              <h3>{dish.name} </h3>
              <p><span className="fa fa-map-marker"></span> {dish.location}, {dish.city}</p>
              <div className="row">
                <p className="col-md-4"><i class="fa fa-star"></i>Ratings {dish.rating}</p>
                <p className="col-md-5 ml-auto"><i class="fa fa-users"></i>{dish.capacitymin}-{dish.capacitymax} Guests</p>
              </div>
            </Card.Body>
            </div>  
          </div>
        </Card>
    );
  }
  searchChange = event => {
    console.log(event.target.value);
    this.setState({
        [event.target.name] : event.target.value,
        venues:this.state.result.filter(item =>{
          return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(event.target.value.toString().toLowerCase()))
        }),
    });
    
  };

  /* cancelSearch = () => {
      this.setState({"search" : ''});
      this.findAllBooks(this.state.currentPage);
  }; */

  /* searchData = (currentPage) => {
      currentPage -= 1;
      axios.get("http://localhost:8081/rest/books/search/"+this.state.search+"?page="+currentPage+"&size="+this.state.booksPerPage)
          .then(response => response.data)
          .then((data) => {
              this.setState({
                  books: data.content,
                  totalPages: data.totalPages,
                  totalElements: data.totalElements,
                  currentPage: data.number + 1
              });
          });
  }; */
  render(){
    const {venues, currentPage, usersPerPage,search} = this.state;
        const lastIndex = currentPage * usersPerPage;
        const firstIndex = lastIndex - usersPerPage;
        const currentUsers = venues.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(venues.length / usersPerPage);

        const pageNumCss = {
            width: "45px",
            border: "1px solid #17A2B8",
            color: "#17A2B8",
            textAlign: "center",
            fontWeight: "bold"
        };
    const menu = currentUsers.map((dish) => {
      return (
          <div className="m-2"  key={dish.id}>
              <this.RenderMenuItem dish={dish} />
          </div>
      );
    });
    return (
        <div className="container" style={{marginTop:'5rem'}}>
          <Header navbg={"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))"} />
          <Card  className="bg-transparent">
            <Card.Body>
              <div className="row">
                <div className="col-md-3"><Accordian/><Accordian/><Accordian/></div>
                <div className="col-md-9">
                  <div className="col-md-5 text-left d-flex flex-column">
                     <InputGroup size="sm">
                        <FormControl placeholder="Search" name="search" value={search}
                            className={"info-border"}
                            onChange={this.searchChange}/>
                        <InputGroup.Text>
                            <Button size="sm" variant="outline-info" type="button" onClick={this.searchData}>
                                search
                            </Button>
                            <Button size="sm" variant="outline-danger" type="button" onClick={this.cancelSearch}>
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </Button>
                        </InputGroup.Text>
                      </InputGroup>        
                  </div>
                  {menu}
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div style={{"float":"left"}}>
                Page {currentPage} of {totalPages}
              </div>
              <div style={{"float":"right"}}>

                <Pagination>
                  {/* <Pagination.First  disabled={currentPage === 1 ? true : false}  onClick={this.firstPage} /> */}
                  <Pagination.Prev   disabled={currentPage === 1 ? true : false}  onClick={this.prevPage}/>
                  {currentPage===1?<Pagination.Item active={currentPage === 1 ? true : false}  onClick={this.firstPage}>{1}</Pagination.Item>:<Pagination.Item  onClick={this.firstPage}>{1}</Pagination.Item>}
                  {totalPages>2 && currentPage<4 && <Pagination.Item active={currentPage === 2 ? true : false} onClick={() => this.changePage(2)}>{2}</Pagination.Item>}
                  {totalPages>3 && currentPage<4 && <Pagination.Item active={currentPage === 3 ? true : false} onClick={() => this.changePage(3)}>{3}</Pagination.Item>}
                  {totalPages>4 && currentPage<4 && <Pagination.Item active={currentPage === 4 ? true : false} onClick={() => this.changePage(4)}>{4}</Pagination.Item>}
                  {totalPages>4 && totalPages>5 && currentPage<4 && <Pagination.Ellipsis />}

                  {currentPage>3 && currentPage<=totalPages-3 && <Pagination.Ellipsis />}
                  {currentPage>3 && currentPage<=totalPages-3 && <Pagination.Item onClick={() => this.changePage(currentPage-1)}>{currentPage-1}</Pagination.Item>}
                  {currentPage>3 && currentPage<=totalPages-3 && <Pagination.Item active>{currentPage}</Pagination.Item>}
                  {currentPage>3 && currentPage<=totalPages-3 && <Pagination.Item onClick={() => this.changePage(currentPage+1)}>{currentPage+1}</Pagination.Item>}
                  {currentPage>3 && currentPage<=totalPages-3 && <Pagination.Ellipsis />}

                  {totalPages-1>0 && totalPages>5 && currentPage>totalPages-3 && <Pagination.Ellipsis />}
                  {totalPages-3>1 && currentPage>3 && currentPage>totalPages-3 && <Pagination.Item active={currentPage === totalPages-3 ? true : false} onClick={() => this.changePage(totalPages-3)}>{totalPages-3}</Pagination.Item>}
                  {totalPages-2>0 && currentPage>3 && currentPage>totalPages-3 && <Pagination.Item active={currentPage === totalPages-2 ? true : false} onClick={() => this.changePage(totalPages-2)}>{totalPages-2}</Pagination.Item>}
                  {totalPages-1>0 && currentPage>3 && currentPage>totalPages-3 && <Pagination.Item active={currentPage === totalPages-1 ? true : false} onClick={() => this.changePage(totalPages-1)}>{totalPages-1}</Pagination.Item>}
                  <Pagination.Item onClick={this.lastPage} active={currentPage === totalPages ? true : false}>{totalPages}</Pagination.Item>
                  <Pagination.Next disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}/>
                  {/* <Pagination.Last disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}/> */}
                </Pagination>
              </div>
            </Card.Footer>
          </Card>
        </div>
    );
  }
}
