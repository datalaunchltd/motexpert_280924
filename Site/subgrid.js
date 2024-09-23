class SubGrid {
    constructor(data = [], containerId, type, id) {
      this.data = data;
      this.containerId = containerId;
      this.type = type
      this.container = document.getElementById(containerId);
      if (id) {
        this.id = id
      }
      this.render();
    }
  
    render() {
      // Clear the container
      this.container.innerHTML = '';
      let html = ''
      console.log('this.data in the subgrid is ', this.data)
        if (this.type === 'tester_garages') {
          html += `<table class="table table-hover data-launch-table-clickable-row notes-table">
                                          <thead>
                                              <tr>
                                                <th>Garage Name</th>
                                                <th>Garage Id</th>
                                                <th></th>
                                              </tr>
                                            </thead>
                                            <tbody id='tester-garages-table-body'>
          `
          this.data.forEach(row =>  {
            html += `<tr>
                <td data-garage-id='${row.id}' class='data-launch-open-garage-record-from-tester-garages-subgrid'>${row.name}</td>
                <td>${row.id}</td> 
                <td><i class="bi bi-trash data-launch-subgrid-delete-item" data-id='${row.tester_garages_id}'></i></td>       
            </tr>`
          })
          html += `</tbody></table>`
          html += `<button class='data-launch-associate-new-garage-record'>
                      <i class="bi bi-plus-circle"></i>Associate New Garage
                    </button>`
          this.container.innerHTML = html
        }
        else if (this.type === 'garage_testers') {
          html += `<table class="table table-hover data-launch-table-clickable-row notes-table">
                                    <thead>
                                        <tr>
                                          <th>Tester Name</th>
                                          <th>Tester Id</th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
            `
            this.data.forEach(row => {
            html += `<tr>
                      <td data-tester-id='${row.id}' class='data-launch-open-tester-record-from-garage-testers-subgrid'>${row.name}</td>
                      <td>${row.id}</td> 
                      <td><i class="bi bi-trash data-launch-subgrid-delete-item" data-id='${row.tester_garages_id}'></i></td>       
                    </tr>`
            })
            html += `</tbody></table>`
            html += `<button class='data-launch-associate-new-tester-record'>
                      <i class="bi bi-plus-circle"></i>Associate New Tester
                      </button>`
            this.container.innerHTML = html
        }
        else if (this.type === 'tester_notes') {
          html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
          <thead>
              <tr>
                <th style="width: 20%;">Create Date</th>
                <th style="width: 20%;">User</th>
                <th style="width: 15%;">Subject</th>
                <th style="width: 40%;">Note</th>                
                <th style="width: 5%;"></th>
              </tr>
            </thead>
            <tbody id="tester_notes_table_body_${this.id}">
          `
          this.data.forEach(row =>  {
          html += `<tr id='tester_notes_${this.id}_${row.id}'>`
              if (row.create_date) {
                let formattedDate = row.create_date.split('T')[0];
                html += `<td class='data-launch-table-clickable-tester-note-row' data-id='${row.id}'>${formattedDate}</td>`
              }
              else {
                  html += `<td class='data-launch-table-clickable-tester-note-row' data-id='${row.id}'></td>`
              }
          html += `
                      <td class='data-launch-table-clickable-tester-note-row' data-id='${row.id}'>${row.created_by_name}</td> 
                      <td class='data-launch-table-clickable-tester-note-row' data-id='${row.id}'>${row.note_subject}</td> 
                      <td class='data-launch-table-clickable-tester-note-row' data-id='${row.id}'>${row.note_body}</td>
                      <td><i class="bi bi-trash data-launch-subgrid-delete-note-item" data-note-id='${row.id}' data-id='${row.id}'></i></td>             
                  </tr>`
         })
          html += `</tbody></table>`
          this.container.innerHTML = html
        }
        else if (this.type === 'garage_mot_equipment') {
          html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
          <thead>
              <tr>
                <th style="width: 20%;">Equipment Type</th>
                <th style="width: 20%;">Make</th>
                <th style="width: 20%;">Model</th>
                <th style="width: 20%;">Serial No</th>
                <th style="width: 15%;">Bay</th>
                <th style="width: 5%;"></th>
              </tr>
            </thead>
            <tbody id="garage_mot_equipment_tbody_${this.id}">
          `
          this.data.forEach(row => {
          html += `<tr id='garage_mot_equipment_${this.id}_${row.id}'>
                      <td class="data-launch-table-clickable-mot-equipment-row" data-id='${row.id}'>${row.equipment_type}</td>
                      <td class="data-launch-table-clickable-mot-equipment-row" data-id='${row.id}'>${row.make}</td>
                      <td class="data-launch-table-clickable-mot-equipment-row" data-id='${row.id}'>${row.model}</td>
                      <td class="data-launch-table-clickable-mot-equipment-row" data-id='${row.id}'>${row.serial_no}</td>
                      <td class="data-launch-table-clickable-mot-equipment-row" data-id='${row.id}'>${row.bay}</td> 
                      <td><i class="bi bi-trash data-launch-subgrid-delete-mot-equipment-item" data-id='${row.id}' data-mot-equipment-id='${row.id}'></i></td>             
                  </tr>`
          })
          html += `</tbody></table>`
          this.container.innerHTML = html
        }
        else if (this.type === 'motcalibration') {
          html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
          <thead>
              <tr>
                <th style="width: 15%;">Equipment Type</th>
                <th style="width: 15%;">Make</th>
                <th style="width: 15%;">Model</th>
                <th style="width: 15%;">Serial No</th>
                <th style="width: 15%;">Last Calibration Date</th>
                <th style="width: 15%;">Next Calibration Date</th>
                <th style="width: 5%;">Notes</th>
                <th style="width: 5%;">Image</th>
                <th style="width: 5%;"></th>
              </tr>
            </thead>
            <tbody id="motcalibration_tbody_${this.id}">
          `;
          this.data.forEach(row => {
          html += `<tr class='data-launch-table-clickable-mot-calibration-row' id='motcalibration_${this.id}_${row.id}'>
                      <td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'>${row.equipment_type}</td>
                      <td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'>${row.make}</td>
                      <td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'>${row.model}</td>
                      <td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'>${row.serial_no}</td>
                      `
                      if (row.last_calibration_date) {
                        let formattedDate = row.last_calibration_date.split('T')[0];
                        html += `<td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'>${this.getFormattedDate(formattedDate)}</td>`
                      }
                      else {
                          html += `<td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'></td>`
                      }
                      if (row.next_calibration_date) {
                        let formattedDate = row.next_calibration_date.split('T')[0];
                        html += `<td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'>${this.getFormattedDate(formattedDate)}</td>`
                      }
                      else {
                          html += `<td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'></td>`
                      }
          html += `
                      <td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'>${row.notes}</td>
                      <td class='data-launch-table-clickable-mot-calibration-row' data-id='${row.id}'>images stuff here</td>                   
                      <td><i class="bi bi-trash data-launch-mot-calibration-delete-item" data-id='${row.id}'></i></td>             
                  </tr>`
         });
          // <td><img src="data:image/jpeg;base64,${row.image_blob}" alt="Image" style="max-width: 50px; max-height: 50px;"/></td>
          html += `</tbody></table>`;
          this.container.innerHTML = html;
        }
        else if (this.type === 'motsiteaudits') {
          html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
          <thead>
              <tr>
                  <th style="width: 20%;">Consultant</th>
                  <th style="width: 20%;">Auditor</th>
                  <th style="width: 20%;">Date</th>
                  <th style="width: 20%;">Are customer areas accessible</th>
                  <th style="width: 20%;">Are MOT bays clearly marked</th>
                  <th style="width: 5%;"></th>
              </tr>
            </thead>
            <tbody id="motsiteaudit_tbody_${this.id}">
          `;
          this.data.forEach(row =>  {
            html += `<tr class='data-launch-table-clickable-mot-site-audit-record' data-id='${row.id}' id='motsiteaudit_${this.id}_${row.id}'>
                      <td class='data-launch-table-clickable-mot-site-audit-record' data-id='${row.id}'>${row.consultant}</td>
                      <td class='data-launch-table-clickable-mot-site-audit-record' data-id='${row.id}'>${row.auditor}</td>
                      `
                      if (row.date) {
                          let formattedDate = row.date.split('T')[0];
                          html += `<td class='data-launch-table-clickable-mot-site-audit-record' data-id='${row.id}'>${this.getFormattedDate(formattedDate)}</td>`
                      }
                      else {
                          html += `<td class='data-launch-table-clickable-mot-site-audit-record' data-id='${row.id}'></td>`
                      }
            html += `
                      <td class='data-launch-table-clickable-mot-site-audit-record' data-id='${row.id}'>${row.are_customer_areas_accessible}</td>
                      <td class='data-launch-table-clickable-mot-site-audit-record' data-id='${row.id}'>${row.are_mot_bays_clearly_marked}</td>
                      <td><i class="bi bi-trash data-launch-subgrid-delete-mot-site-audit-item" data-id='${row.id}'></i></td>             
                  </tr>`
          });
          html += `</tbody></table>`;
          this.container.innerHTML = html;
      }
      else if (this.type === 'qccheckers') {
        html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
          <thead>
            <tr>
                <th style="width: 15%;">Tester Name</th>
                <th style="width: 15%;">Vehicle Reg</th>
                <th style="width: 15%;">Date of QC</th>
                <th style="width: 15%;">QC Carried out by</th>
                <th style="width: 15%;">All required doors open</th>
                <th style="width: 15%;">Brake pedal and servo operation checked</th>
                <th style="width: 5%;"></th>
            </tr>
          </thead>
          <tbody id="qccheckers_tbody_${this.id}">
        `;
        this.data.forEach(row => {
          html += `<tr class='data-launch-table-clickable-qc-checker-record' data-id='${row.id}' id='qccheckers_${this.id}_${row.id}'>
                    <td class='data-launch-table-clickable-qc-checker-record' data-id='${row.id}'>${row.tester_name}</td>
                    <td class='data-launch-table-clickable-qc-checker-record' data-id='${row.id}'>${row.vehicle_reg}</td>`
                    if (row.date_of_qc) {
                      let formattedDate = row.date_of_qc.split('T')[0];
                      html += `<td class='data-launch-table-clickable-qc-checker-record' data-id='${row.id}'>${this.getFormattedDate(formattedDate)}</td>`
                  }
                  else {
                      html += `<td class='data-launch-table-clickable-qc-checker-record' data-id='${row.id}'></td>`
                  }
          html += `
                    <td class='data-launch-table-clickable-qc-checker-record' data-id='${row.id}'>${row.qc_carried_out_by}</td>
                    <td class='data-launch-table-clickable-qc-checker-record' data-id='${row.id}'>${row.all_required_doors_open}</td>
                    <td class='data-launch-table-clickable-qc-checker-record' data-id='${row.id}'>${row.brake_pedal_servo_operation_checked}</td>
                    <td><i class="bi bi-trash data-launch-subgrid-delete-qc-checker-item" data-id='${row.id}'></i></td>             
                </tr>`
      });
        html += `</tbody></table>`;
        this.container.innerHTML = html;
      }
      else if (this.type === 'garageBookings') {
        html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
        <thead>
            <tr>
                <th style="width: 15%;">Vehicle Reg</th>
                <th style="width: 15%;">Vehicle Make</th>
                <th style="width: 15%;">Vehicle Model</th>
                <th style="width: 15%;">Customer Name</th>
                <th style="width: 10%;">Booking Date</th>
                <th style="width: 5%;"></th>
            </tr>
          </thead>
          <tbody id="garageBookings_tbody_${this.id}">
        `;
        this.data.forEach(row => {
        html += `<tr class='data-launch-table-clickable-garage-booking-record' data-id='${row.id}' id='garageBookings_${this.id}_${row.id}'>
                    <td class='data-launch-table-clickable-garage-booking-record' data-id='${row.id}'>${row.vehicle_reg}</td>
                    <td class='data-launch-table-clickable-garage-booking-record' data-id='${row.id}'>${row.vehicle_make}</td>
                    <td class='data-launch-table-clickable-garage-booking-record' data-id='${row.id}'>${row.vehicle_model}</td>
                    <td class='data-launch-table-clickable-garage-booking-record' data-id='${row.id}'>${row.customer_first_name} ${row.customer_last_name}</td>
                    `
                    if (row.booking_date) {
                      let formattedDate = row.booking_date.split('T')[0];
                      html += `<td class='data-launch-table-clickable-garage-booking-record' data-id='${row.id}'>${this.getFormattedDate(formattedDate)}</td>`
                    }
                    else {
                      html += `<td class='data-launch-table-clickable-garage-booking-record' data-id='${row.id}'></td>`
                    }
                    html += `
                    <td><i class="bi bi-trash data-launch-subgrid-delete-garage-booking-item" data-id='${row.id}'></i></td>             
                </tr>`
      });
        html += `</tbody></table>`;
        this.container.innerHTML = html;
      }

      else if (this.type === 'defectReports') {
        html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
        <thead>
            <tr>
                <th style="width: 10%;">Reference</th>
                <th style="width: 15%;">Reported Date</th>
                <th style="width: 30%;">Defect Description</th>
                <th style="width: 15%;">DVSA Notified</th>
                <th style="width: 15%;">Repaired</th>
                <th style="width: 5%;"></th>
            </tr>
          </thead>
          <tbody id="defectReports_tbody_${this.id}">
        `;
        this.data.forEach(row => {
        html += `<tr class='data-launch-table-clickable-defect-report-record' data-id='${row.id}' id='defectReports_${this.id}_${row.id}'>
                    <td class='data-launch-table-clickable-defect-report-record' data-id='${row.id}'>${row.reference}</td>`
                    if (row.reported_date) {
                      let formattedDate = row.reported_date.split('T')[0];
                      html += `<td class='data-launch-table-clickable-defect-report-record' data-id='${row.id}'>${this.getFormattedDate(formattedDate)}</td>`
                    }
                    else {
                      html += `<td class='data-launch-table-clickable-defect-report-record' data-id='${row.id}'></td>`
                    }
    html += `
                    <td class='data-launch-table-clickable-defect-report-record' data-id='${row.id}'>${row.defect_description}</td>
                    <td class='data-launch-table-clickable-defect-report-record' data-id='${row.id}'>${row.dvsa_notified ? 'Yes' : 'No'}</td>
                    <td class='data-launch-table-clickable-defect-report-record' data-id='${row.id}'>${row.repaired ? 'Yes' : 'No'}</td>
                    <td><i class="bi bi-trash data-launch-subgrid-delete-defect-report-item" data-id='${row.id}'></i></td>             
                </tr>`
      });
        html += `</tbody></table>`;
        this.container.innerHTML = html;
    }

    else if (this.type === 'motBayCleaningLog') {
      html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
      <thead>
          <tr>
              <th style="width: 20%;">Date</th>
              <th style="width: 20%;">Signed</th>
              <th style="width: 50%;">Description</th>
              <th style="width: 5%;"></th>
          </tr>
        </thead>
        <tbody id="motBayCleaningLog_tbody_${this.id}">
      `;
      this.data.forEach(row =>  {
      html += `<tr class='data-launch-table-clickable-mot-bay-cleaning-log-record' data-id='${row.id}' id='motBayCleaningLog_${this.id}_${row.id}'>`
                    if (row.date) {
                      let formattedDate = row.date.split('T')[0];
                      html += `<td class='data-launch-table-clickable-mot-bay-cleaning-log-record' data-id='${row.id}'>${this.getFormattedDate(formattedDate)}</td>`
                    }
                    else {
                      html += `<td class='data-launch-table-clickable-mot-bay-cleaning-log-record' data-id='${row.id}'></td>`
                    }
        html +=  `<td class='data-launch-table-clickable-mot-bay-cleaning-log-record' data-id='${row.id}'>${row.signed}</td>
                  <td class='data-launch-table-clickable-mot-bay-cleaning-log-record' data-id='${row.id}'>${row.description || ''}</td>
                  <td><i class="bi bi-trash data-launch-subgrid-delete-mot-bay-cleaning-log-item" data-id='${row.id}'></i></td>             
              </tr>`
      });
      html += `</tbody></table>`;
      this.container.innerHTML = html;
    }

    else if (this.type === 'testerTrainingRecords') {
      html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
      <thead>
          <tr>
              <th style="width: 20%;">Training Subject</th>
              <th style="width: 10%;">Created By</th>
              <th style="width: 20%;">Date</th>
              <th style="width: 12.5%;">Duration</th>
              <th style="width: 32.5%;">Training Topics Covered</th>
              <th style="width: 5%;"></th>
          </tr>
        </thead>
        <tbody id="testerTrainingRecords_tbody_${this.id}">
      `;
      this.data.forEach(row => 
      html += `<tr class='data-launch-table-clickable-tester-training-record' data-id='${row.id}' id='testerTrainingRecords_${this.id}_${row.id}'>
                  <td class='data-launch-table-clickable-tester-training-record' data-id='${row.id}'>${row.training_subject}</td>
                  <td class='data-launch-table-clickable-tester-training-record' data-id='${row.id}'>${row.created_by_name}</td>
                  <td class='data-launch-table-clickable-tester-training-record' data-id='${row.id}'>${this.getFormattedDate(row.date)}</td>
                  <td class='data-launch-table-clickable-tester-training-record' data-id='${row.id}'>${row.duration}</td>
                  <td class='data-launch-table-clickable-tester-training-record' data-id='${row.id}'>${row.training_topics}</td>
                  <td><i class="bi bi-trash data-launch-subgrid-delete-tester-training-record-item" data-id='${row.id}'></i></td>             
              </tr>`
      );
      html += `</tbody></table>`;
      this.container.innerHTML = html;
    }

    else if (this.type === 'qcCheckersForBike') {
      html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
      <thead>
          <tr>
              <th style="width: 10%;">Tester Name</th>
              <th style="width: 10%;">Vehicle Reg</th>
              <th style="width: 15%;">Date of QC</th>
              <th style="width: 10%;">QC Carried out by</th>
              <th style="width: 10%;">Vehicle Class</th>
              <th style="width: 10%;">Name QC Checker</th>
              <th style="width: 5%;"></th>
          </tr>
        </thead>
        <tbody id="qcCheckersForBike_tbody_${this.id}">
      `;
      this.data.forEach(row => 
      html += `<tr class='data-launch-table-clickable-qc-checker-bike-record' data-id='${row.id}' id='qcCheckersForBike_${this.id}_${row.id}'>
                  <td class='data-launch-table-clickable-qc-checker-bike-record' data-id='${row.id}'>${row.tester_name}</td>
                  <td class='data-launch-table-clickable-qc-checker-bike-record' data-id='${row.id}'>${row.vehicle_reg}</td>
                  <td class='data-launch-table-clickable-qc-checker-bike-record' data-id='${row.id}'>${this.getFormattedDate(row.date_of_qc)}</td>
                  <td class='data-launch-table-clickable-qc-checker-bike-record' data-id='${row.id}'>${row.qc_carried_out_by}</td>
                  <td class='data-launch-table-clickable-qc-checker-bike-record' data-id='${row.id}'>${row.vehicle_class}</td>
                  <td class='data-launch-table-clickable-qc-checker-bike-record' data-id='${row.id}'>${row.name_qc_checker}</td>
                  <td><i class="bi bi-trash data-launch-subgrid-delete-qc-checker-bike-item" data-id='${row.id}'></i></td>             
              </tr>`
      );
      html += `</tbody></table>`;
      this.container.innerHTML = html;
    }
  

  
    
        
    }
    getFormattedDateTime(date) {
      if (date) {
          const now = new Date(date);
      
          const day = String(now.getDate()).padStart(2, '0');
          const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
          const year = now.getFullYear();
      
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
      
          return `${day}/${month}/${year} - ${hours}:${minutes}`;
      }
      else {
        return ''
      }
    }
    getFormattedDate(date) {
      if (date) {
          const now = new Date(date);
      
          const day = String(now.getDate()).padStart(2, '0');
          const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
          const year = now.getFullYear();
          return `${day}/${month}/${year}`;
      }
      else {
        return ''
      }
    }
    addItem() {
      const newItem = prompt('Enter new item:');
      if (newItem) {
        this.data.push(newItem);
        this.render();
      }
    }
  
    deleteItem(index) {
      this.data.splice(index, 1);
      this.render();
    }
}