import React from "react";
import "./App.css"; 
import "./style.css";

import {BrowserRouter, Routes,Route,NavLink} from "react-router-dom";
const App =() => {
  return(
    <BrowserRouter>
   <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
  </Routes>
    </BrowserRouter>
  );
};
const NavBar = () => {
    return(
    <nav>
      <center> <NavLink
        id="sahil"
        to="/"
        className={({isActive}) => (isActive ? "linl-active" : "link")}
        >Home</NavLink></center>

        <NavLink
        id="sahil"
        to="/about"
        className={({isActive}) => (isActive ? "linl-active" : "link")}
        >About</NavLink>

        <NavLink
        id="sahil"
        to="/contact"
        className={({isActive}) => (isActive ? "linl-active" : "link")}
        >contact</NavLink>

    </nav>
   
      
    );
};
const Homepage =() =>{
  return(
    <div>
      <div className="content">
      <body>
        <table border="0" width="100%" cellspacing="0" cellpadding="0">
            <tr bgcolor="#ffffff">
                <th align="middle" colspan="3">
                    <h1><img src='/image/headck.jpg' width="5%" height="5%"></img>&nbsp;&nbsp;<font  face="goudy stout" color="#766342">COFFEKING</font>&nbsp;&nbsp;<img src='image/headck.jpg' width="5%" height="5%"></img></h1>
                </th>
            </tr>

            <tr bgcolor="#ffffff">
                <td align="middle" colspan="3">
                    <hr></hr>
                </td>
            </tr>
           
            <tr bgcolor="#ffffff">
                <th align="middle" colspan="3">
                <NavBar/>
                </th>
            </tr>
            
            <tr  bgcolor="#ffffff">
                <td align="middle" colspan="3">
                    <hr></hr>
                </td>
            </tr>

            <tr bgcolor="#ffffff">
                <td align="middle" colspan="3">
                    <br></br>
                </td>
            </tr>

            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>

            <tr>
                <td align="middle" colspan="3">
                    <img src="image/homepage.jpg"></img>
                </td>
            </tr>

            <tr>
               <td>&nbsp;</td>
            </tr>
            <tr>
               <td>&nbsp;</td>
            </tr>
          
            <tr className="back1">
               <td align="middle"><img src="image/headck.jpg" width="50%" height="50%"></img></td>
               <td align="middle"><img src="image/headlogo.jpg" width="50%" height="50%"></img></td>
               <td align="middle"><img src="image/headck.jpg" width="50%" height="50%"></img></td>
            </tr>
                 
            <tr>
               <td>&nbsp;</td>
            </tr>
            <tr>
               <td>&nbsp;</td>
            </tr>
        </table>
         <center>
             <table col="2" border="1" align="center" width="1200px" height="50px">
                <tr>
                   <td>
                     <img src="image/tablecoffee.jpg" width="100%" height="400px"></img>
                   </td>

                   <td bgcolor="white"> <div class="a">Trending Now</div>
                     <ul>
                        <blockquote>
                           <li class="b">defamation,  defame jury find johnay def..</li>
                           <li class="c">codify draft supremcourt desicion...</li>
                           <li class="d">contempt, held in contempt trump was found to be...</li>
                        </blockquote>
                     </ul>
                   </td>
                </tr>
             </table>
             <br></br>  
         </center>

            <table border="0" width="100%" cellspacing="0" cellpadding="0">
                <tr bgcolor="#ffffff">
                  <td align="middle" colspan="3">
                    <hr></hr>
                  </td>
                </tr>

                <tr bgcolor="white">
                    <th align="middle" colspan="3">&copy; 2022 &nbsp;designeted by sahil kabariya</th>
                </tr>

                <tr bgcolor="#ffffff">
                    <td align="middle" colspan="3">
                      <hr></hr> 
                    </td>
                </tr>
                <br></br>
            </table>
      </body>
      </div>
    </div>
  );
};
const Aboutpage = () => {
      return(
        <div>
          <div className="content">
          <body bgcolor="#ffc86f">
            <table border="0" width="100%" cellspacing="0" cellpadding="0">
              <tr bgcolor="#ffffff">
                 <th align="middle" colspan="3">
                 <h1>
                   <img src='image/headck.jpg' width="5%" height="5%"></img>&nbsp;&nbsp;
                      <font size="+6" face="goudy stout" color="#766342">
                         COFFEKING
                      </font> &nbsp;&nbsp;
                   <img src='image/headck.jpg' width="5%" height="5%"></img>
                 </h1>
                 </th>
              </tr>

              <tr bgcolor="#ffffff">
                 <td align="middle" colspan="3">
                    <hr></hr>
                 </td>
              </tr>

              <tr bgcolor="#ffffff">
                 <th align="middle" colspan="3">
                   <NavBar/>
                 </th>
              </tr>

              <tr bgcolor="#ffffff">
                 <td align="middle" colspan="3">
                    <hr></hr>
                 </td>
              </tr>
              <tr  bgcolor="#ffffff">
                 <td align="middle" colspan="3">
                   <br></br>
                 </td>
              </tr>

              <tr>
                <table width="100%" border="0">
                   <tr>
                     <td></td>
                   </tr>
                </table>
              </tr> <br></br> <br></br>

              <tr>
                <td width="50%" align="middle" height="50%">
                  <img src='image/logo.jpg' height="40%" height="40%"></img>
                </td>
                <td width="50%">
                   <table border="3" align="middle" cellspacing="3" cellpadding="5" width="50%"  colspan="2" bgcolor="#ffffff">
                      <tr>
                         <th align="center" colspan="6"><b><font face="cooper" color="#772116"><h2>coffee menu</h2></font></b></th>
                      </tr>
                
                      <tr>
                         <td align="centere" size="+3"><font face="showcard gothic" color="#775c46">index</font></td>
                         <td align="centere" size="+3"><font face="showcard gothic" color="#775c46">coffee name</font></td>
                         <td align="centere" size="+3"><font face="showcard gothic" color="#775c46">prize</font></td>
                      </tr>
                        
                      <tr>
                         <td><font color="#7785aa" face="showcard gothic">1</font></td>
                         <td><font color="#7785aa" face="showcard gothic">espresso</font></td>
                         <td><font color="#7785aa" face="showcard gothic">250</font></td>
                      </tr>

                      <tr>
                         <td><font color="#7785aa" face="showcard gothic">2</font></td>
                         <td><font color="#7785aa" face="showcard gothic">coffee bean</font></td>
                         <td><font color="#7785aa" face="showcard gothic">300</font></td>
                       </tr>
                            
                       <tr>
                         <td><font color="#7785aa" face="showcard gothic">3</font></td>
                         <td><font color="#7785aa" face="showcard gothic">instant coffee</font></td>
                         <td><font color="#7785aa" face="showcard gothic">350</font></td>
                       </tr>
                            
                       <tr>
                         <td><font color="#7785aa" face="showcard gothic">4</font></td>
                         <td><font color="#7785aa" face="showcard gothic">cappuccino</font></td>
                         <td><font color="#7785aa" face="showcard gothic">400</font></td>
                       </tr>
                            
                       <tr>
                         <td><font color="#7785aa" face="showcard gothic">5</font></td>
                         <td><font color="#7785aa" face="showcard gothic">green coffee</font></td>
                         <td><font color="#7785aa" face="showcard gothic">450</font></td>
                       </tr>
                   </table>
               </td>
             </tr> 
            </table>
            <br></br>

            <table border="0" width="100%" cellspacing="0" cellpadding="0">
              <tr bgcolor="#ffffff">
                <td align="middle" colspan="3">
                    <hr></hr>
                </td>
              </tr>

              <tr bgcolor="white">
               <th align="middle" colspan="3">&copy; 2022 &nbsp;designeted by sahil kabariya</th>
              </tr>

              <tr bgcolor="#ffffff">
                <td align="middle" colspan="3">
                    <hr></hr>
                </td>
              </tr>
            </table>
            <br></br>
          </body>
          </div>
        </div>
     );
   };

const ContactPage = () => {
  return(
    <div>
      <div className="content">
        <body>
        <table border="0" width="100%" cellspacing="0" cellpadding="0">
            <tr bgcolor="#ffffff">
               <th align="middle" colspan="3">
                  <h1>
                      <img src='image/headck.jpg' width="5%" height="5%"></img>&nbsp;&nbsp;
                        <font size="+6" face="goudy stout" color="#766342">
                         COFFEKING
                        </font> &nbsp;&nbsp;
                      <img src='image/headck.jpg' width="5%" height="5%"></img>
                  </h1>
                </th>
            </tr>

            <tr bgcolor="#ffffff">
                <td align="middle" colspan="3">
                  <hr></hr>
                </td>
            </tr>

            <tr bgcolor="#ffffff">
                <th align="middle" colspan="3">
                  <NavBar/>
                </th>
            </tr>
        
            <tr bgcolor="#ffffff">
                <td align="middle" colspan="3">
                   <hr></hr>
                </td>
            </tr>

            <tr  bgcolor="#ffffff">
                <td align="middle" colspan="3">
                   <br></br>
                </td>
            </tr>
       </table>

       <section id="contact">
          <h1 class="h-primary">Contact us</h1>
          <div id="contact-box">
            <form action="">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" required="enter your name"  placeholder="enter your name"></input>
                </div>
                <div class="form-group">
                    <label for="name">Email:</label>
                    <input type="email" name="email" id="email"  required="enter your email" placeholder="enter your email"></input>
                </div><div class="form-group">
                    <label for="name">Phone Number:</label>
                    <input type="phone" name="name" id="phone"  required="enter your phone number" placeholder="enter your Number"></input>
                </div>
                <div class="form-group">
                    <label for="name">Massage:</label>
                    <textarea name="Massage" id="massage"  required="enter your message" cols="30" rows="10"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" id="submit">submit</button>
                </div>
            </form>
           </div>
       </section>
        <table border="0" width="100%" cellspacing="0" cellpadding="0">
            <tr bgcolor="#ffffff">
                <td align="middle" colspan="3">
                  <hr></hr>
                </td>
            </tr>

            <tr bgcolor="white">
               <th align="middle" colspan="3">&copy; 2022 &nbsp;designeted by sahil kabariya</th>
            </tr>

            <tr bgcolor="#ffffff">
                <td align="middle" colspan="3">
                    <hr></hr>
                </td>
            </tr>
        </table>
        <br></br>
        </body>
    </div>
    </div>
  );
};
export default App;
