## Forms

<form>
  <div class="row">
    <div class="small-column3">
      <span class="prefix">http://</span>
    </div>
    <div class="small-column9">
      <input type="text" placeholder="Enter your URL...">
    </div>
  </div>

  <div class="row">
    <div class="row">
      <div class="small-column10">
        <input type="text" placeholder="Hex Value">
      </div>
      <div class="small-column2">
        <a href="#" class="button bg-blue postfix">Go</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="small-column6">
      <div class="row">
        <div class="small-column3">
          <span class="prefix">Label</span>
        </div>
        <div class="small-column9">
          <input type="text" placeholder="Value">
        </div>
      </div>
    </div>
    <div class="small-column6 padding-left16">
      <div class="row">
        <div class="small-column9">
          <input type="text" placeholder="Value">
        </div>
        <div class="small-column3">
          <span class="postfix">Label</span>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="small-column6">
      <div class="row">
        <div class="small-column3">
          <a href="#" class="button bg-blue prefix">Go</a>
        </div>
        <div class="small-column9">
          <input type="text" placeholder="Value">
        </div>
      </div>
    </div>
    <div class="small-column6 padding-left16">
      <div class="row">
        <div class="small-column9">
          <input type="text" placeholder="Value">
        </div>
        <div class="small-column3">
          <a href="#" class="button bg-blue postfix">Go</a>
        </div>
      </div>
    </div>
  </div>
</form>

###Switches
Switches are toggle element that make use of check-box inputs (or radio buttons). They can be used to switch between an Off and On state on tap or click.

<div class="row">
<div class="column6">
<h4>`div` example</h4>
<div>
  <input id="example" class="switch" type="checkbox">
  <label for="example"></label>
</div>
</div>


<div class="column6">
<h4>`fieldset` example</h4>
<fieldset class="no-border">
  <input id="exampleCheckboxSwitch4" class="switch switch-round" type="checkbox">
  <label for="exampleCheckboxSwitch4"></label>
</fieldset>
</div>

</div>

###Contact form example
<form>
  <div class="row"><input placeholder="Your name" name="text" type="text"></div>
  <div class="row"><input name="email" placeholder="e-mail@example.com" type="email"></div>
  <div class="row"><textarea name="text area" placeholder="Your message"></textarea></div>
  <button class="button button-blue border-radius2" type="submit" value="Submit">Send</button>
  <button type="reset">Reset</button>
</form>

###Disabled form
<div class="row"><input form="text" placeholder="Text Box Disabled" disabled="disabled" name="text" type="text"></div>