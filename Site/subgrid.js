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
      this.data.forEach(row => 
        html += `<tr>
            <td data-garage-id='${row.id}' class='data-launch-open-garage-record-from-tester-garages-subgrid'>${row.name}</td>
            <td>${row.id}</td> 
            <td><i class="bi bi-trash data-launch-subgrid-delete-item" data-id='${row.tester_garages_id}'></i></td>       
        </tr>`
      )
      html += `</tbody></table>`
      html += `<button class='data-launch-associate-new-garage-record modern-button'>
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
          this.data.forEach(row => 
          html += `<tr>
                    <td data-tester-id='${row.id}' class='data-launch-open-tester-record-from-garage-testers-subgrid'>${row.name}</td>
                    <td>${row.id}</td> 
                    <td><i class="bi bi-trash data-launch-subgrid-delete-item" data-id='${row.tester_garages_id}'></i></td>       
                  </tr>`
          )
          html += `</tbody></table>`
          html += `<button class='data-launch-associate-new-tester-record modern-button'>
                     <i class="bi bi-plus-circle"></i>Associate New Tester
                    </button>`
          this.container.innerHTML = html
      }
      else if (this.type === 'tester_notes') {
        html += `<table class="table table-hover data-launch-table-clickable-row notes-table" style='width: 100%; table-layout: fixed;'>
        <thead>
            <tr>
              <th style="width: 20%;">Date</th>
              <th style="width: 20%;">Subject</th>
              <th style="width: 55%;">Note</th>
              <th style="width: 5%;"></th>
            </tr>
          </thead>
          <tbody id="tester_notes_table_body_${this.id}">
        `
        this.data.forEach(row => 
        html += `<tr id='tester_notes_${this.id}_${row.id}'>
                    <td>${row.date}</td>
                    <td>${row.note_subject}</td> 
                    <td>${row.note_body}</td>
                    <td><i class="bi bi-trash data-launch-subgrid-delete-note-item" data-note-id='${row.id}'></i></td>             
                </tr>`
        )
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
              <th style="width: 20%;">Bay</th>
            </tr>
          </thead>
          <tbody id="garage_mot_equipment_tbody_${this.id}">
        `
        this.data.forEach(row => 
        html += `<tr id='garage_mot_equipment_${this.id}_${row.id}'>
                    <td>${row.name}</td>
                    <td>${row.make}</td>
                    <td>${row.model}</td>
                    <td>${row.serial_no}</td>
                    <td>${row.bay}</td> 
                    <td><i class="bi bi-trash data-launch-subgrid-delete-mot-equipment-item" data-mot-equipment-id='${row.id}'></i></td>             
                </tr>`
        )
        html += `</tbody></table>`
        this.container.innerHTML = html
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