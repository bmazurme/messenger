export const tmp = `
  <div class="inbox" >
    <input
      class="input {{inputStyle}}" 
      type="{{inputType}}"
      autocomplete="{{inputAutocomplete}}"
      id="{{inputId}}" required 
      data-validation="{{inputValidation}}"
    />
    <span class="{{spanStyle}}"></span>
    <label class="{{labelClass}}" >
      {{labelText}}
    </label>
    <span class="{{errorStyle}}"></span>
  </div>
`;