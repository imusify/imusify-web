<template>
    <div class="wrapform lg">
       <h1 class="heading__">Complete your profile</h1>
       <div class="two-column">
          <div class="left-sec">
             <img src="../assets/logo.png" />
             <button class="uploadbutton">
                <span class="icon-svg upload">
                   <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg" style="
                      color: red;
                      ">
                      <path d="M18 13.7222H14.625V19H12.375V13.7222H9L13.5 9.5L18 13.7222ZM21.9139 7.486C21.6754 3.3155 18.0068 0 13.5 0C8.99325 0 5.32463 3.3155 5.08612 7.486C2.19488 7.97472 0 10.3423 0 13.1944C0 16.4002 2.77087 19 6.1875 19H10.125V16.8889H6.1875C4.01625 16.8889 2.25 15.2317 2.25 13.1944C2.25 10.2421 5.03888 9.1485 7.23712 9.26778C7.04925 4.81544 9.72112 2.11111 13.5 2.11111C17.3846 2.11111 20.1274 5.0635 19.7629 9.26778C21.726 9.21922 24.75 10.0605 24.75 13.1944C24.75 15.2317 22.9837 16.8889 20.8125 16.8889H16.875V19H20.8125C24.2291 19 27 16.4002 27 13.1944C27 10.3423 24.8051 7.97472 21.9139 7.486Z"></path>
                   </svg>
                </span>
                UPLOAD IMAGE
             </button>
          </div>
          <div class="right-sec">
             <form>
                <div class="form-group">
                   <label class="control-label">First name</label>
                   <input  type="text" class="form-control"  id="username" placeholder="Enter First name">
                </div>
                <div class="form-group">    
                   <label class="control-label">Last name</label>
                   <input  type="text" class="form-control" id="username" placeholder="Enter Last name">
                </div>
                <div class="form-group">
                   <label class="control-label">Country</label>
                   <select type="text" class="form-control" id="username">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                   </select>
                </div>
                <div class="form-group">
                   <label class="control-label">State</label>
                   <select  type="text" class="form-control" id="username">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                   </select>
                </div>
                <div class="form-group">
                   <label class="control-label">City</label>
                   <select type="text" class="form-control" id="username">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                   </select>
                </div>
                <div class="form-group">    
                   <label class="control-label">Date of birth</label>
                   <input type="text" class="form-control" id="username" placeholder="_/_/_">
                </div>
                <div class="cta left">
                   <button class="savebutton">SAVE SETTINGS</button>
                </div>
             </form>
          </div>
       </div>
    </div>    
</template>
<script>
export default {
  name: 'profile',
  data() {},
};
</script>
