class calcController {
    
  constructor(){
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector("#hora");
      this._currentDate;
      this.initialize();
  }

  initialize(){
   this._displayCalcEl.innerHTML = "12345";
   this._dateEl.innerHTML = "28/05/2020";
   this._timeEl.innerHTML = "00:16";

  }

  get displayCalc(){
      return this._displayCalcEl.innerHTML;
  }

  set displayCalc(valor){
      this._displayCalcEl.innerHTML = valor;
  }

  get currentDate(){
      return this._currentDate;
  }

  set currentDate(date){
      this._currentDate = date;
  }
}
