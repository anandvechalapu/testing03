import { LightningElement, api } from 'lwc';

export default class StudentTrigger extends LightningElement {
    @api recordId;

    connectedCallback(){
        if(this.recordId){
            this.updateMobileField();
        }
    }

    updateMobileField(){
        // make sure to check if the Mobile field is empty or null
        if(!this.recordId.Mobile || this.recordId.Mobile == null){
            // fetch mobile number from Student__c custom object
            let mobileNumber = this.fetchStudentMobileNumber();

            // update the Mobile field with the mobileNumber
            this.updateMobileField(mobileNumber);
        }
    }

    //fetch mobile number from Student__c custom object
    fetchStudentMobileNumber(){
        // code to fetch mobile number
    }

    // update the Mobile field with the mobileNumber
    updateMobileField(mobileNumber){
        // code to update Mobile field
    }
}