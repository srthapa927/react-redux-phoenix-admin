import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Questions from '../common/Questions';

class Assignment extends Component {
  state = {
     assignment:{}
  };

  componentDidMount(){
      axios.get("http://localhost:3000/assignment/get")
  }


  render() {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Client to Physician Assignment
                    <small>Preview</small>
                </h1>
                <ol className="breadcrumb">
                    <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                    <li><Link to="#">Forms</Link></li>
                    <li className="active">General Elements</li>
                </ol>
            </section>

            <div className="content">
                <div className="box box-primary">
                  <div className="box-header with-border">
                     <h3 className="box-title">Assigned Users</h3>
                  </div>

                 { /* ------------Form ------------------ */}
                  <div class="box">
                      <div class="box-body">
                         <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                             <div class="row">
                                 <div class="col-sm-6">
                                     <div class="dataTables_length" id="example1_length">
                                         <label>Show 
                                             <select name="example1_length" aria-controls="example1" class="form-control input-sm">
                                                  <option value="10">10</option><option value="25">25</option>
                                                  <option value="50">50</option><option value="100">100</option>
                                             </select>
                                             entries
                                          </label>
                                      </div>
                                  </div>
                        
                                  <div class="col-sm-6">
                                      <div id="example1_filter" class="dataTables_filter">
                                         <label>Search:
                                              <input type="search" class="form-control input-sm" placeholder="" aria-controls="example1"/>
                                         </label>
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                 <div class="col-sm-12">
                                     <table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                                         <thead>
                                             <tr role="row">
                                                 <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style={{"width": "168px"}}>
                                                     Client
                                                 </th>
                                                 <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style={{"width": "208px"}}>
                                                    Physician
                                                 </th>
                                                 <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style={{"width": "184px"}}>
                                                     Option(s)
                                                 </th>
                                             </tr>
                                         </thead>
                                         <tbody>                
                                            <tr role="row" class="odd">
                                                <td class="sorting_1">Gecko</td>
                                                <td>Firefox 1.0</td>
                                                <td>Win 98+ / OSX.2+</td>
                                            </tr>
                                            <tr role="row" class="even">
                                                <td class="sorting_1">Gecko</td>
                                                <td>Firefox 1.5</td>
                                                <td>Win 98+ / OSX.2+</td>                           
                                            </tr>
                                         </tbody>                    
                                       </table>                    
                                   </div>
                              </div>
                          </div>
                       </div>    
                   </div>
                  </div> 
                </div>

                <div className="content">

                 <div className="box box-primary">
                       <div className="box-header with-border">
                         <h3 className="box-title">UnAssigned Users</h3>
                       </div>
                       <div className="box">
                       <div class="box-body">
                         <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                           <div class="row">
                              <div class="col-sm-6">
                                 <div class="dataTables_length" id="example1_length">
                                     <label>Show 
                                         <select name="example1_length" aria-controls="example1" class="form-control input-sm">
                                             <option value="10">10</option><option value="25">25</option>
                                             <option value="50">50</option><option value="100">100</option>
                                         </select>
                                          entries
                                     </label>
                                 </div>
                             </div>
                            
                            <div class="col-sm-6">
                                <div id="example1_filter" class="dataTables_filter">
                                    <label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="example1"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-sm-12">
                            <table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                                <thead>
                                    <tr role="row">
                                    <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style={{"width": "168px"}}>
                                        Client
                                    </th>
                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style={{"width": "208px"}}>
                                        Physician
                                    </th>
                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style={{"width": "184px"}}>
                                        Option(s)
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>                
                                    <tr role="row" class="odd">
                                        <td class="sorting_1">Gecko</td>
                                        <td>Firefox 1.0</td>
                                        <td>Win 98+ / OSX.2+</td>
                                    
                                    </tr>
                                    <tr role="row" class="even">
                                        <td class="sorting_1">Gecko</td>
                                        <td>Firefox 1.5</td>
                                        <td>Win 98+ / OSX.2+</td>                           
                                    </tr>
                                </tbody>                    
                            </table>                    
                        </div>
                        </div>
                       </div>
                      </div>  
                      </div>
                    </div>
                </div>    
            </div>    
    )
  }
}
export default Assignment;