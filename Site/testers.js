console.log('testing station file')
class Testers {
    constructor(id) {
        console.log('hit this section')
        this.data = testersData
        console.log('this. data - TESTERS ', this.data)
        this.filteredData = []
        this.filters = []
        this.garageData = garageData
        // this.generateDummyData()
        this.selectedGarageId = null;
        this.setupModal();
        if (id) {
            this.id = id
            this.addListeners()
            this.openForm(true, id)
        }
        else {
           this.renderHTMLHeader()
        }
    }
    renderHTMLHeader () {
        let html = `
        <div class="button-container">
            <button class="modern-button data-launch-add-new-tester-record">
                <span class="plus-icon">+</span>
                New Tester
            </button>
        </div>
        <div class="container">
            <table class="responsive-table">
                <thead class="responsive-table__head">
                    <tr class="responsive-table__row">
                        <th class="responsive-table__head__title responsive-table__head__title--name">
                            <span class='data-launch-header-label'>First Name</span>
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--name">
                            <span class='data-launch-header-label'>Last Name</span>
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                          <span class='data-launch-header-label'>Phone</span>
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                          <span class='data-launch-header-label'>Email</span>
                        </th>                        
                    </tr>
                     <tr class="responsive-table__row data-launch-inactive" id='data-launch-testing-station-filter-container'>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="first_name" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--name">
                            <input type="text" class="data-launch-filter-search" data-launch-header="last_name" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="phone_number" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="email_address" style="width: 100%;" placeholder="" value="">
                        </th>
                    </tr>
                    
                </thead>
                <tbody class="responsive-table__body" id="data-launch-tester-records-table-body">
                `
        this.renderHTMLData(html)
    }
    renderHTMLData(html) {
        console.log('html is ', html)
        console.log('this.data is ', this.data)
        let data = this.data
        let exportRow = 0
        for (let i = 0; i < data.length; i++) {
            html += `
            <tr class="responsive-table__row export-row" data-export-row="${exportRow}" data-export-header="id" data-export-val="${data[i].id}" data-id="${data[i].id}">
                <td class="responsive-table__body__text responsive-table__body__text--name export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="first_name Name" data-export-val="${data[i].first_name}" scope="row">
					<svg class="user-icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
						<path d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z" fill="#cbe2ff" />
						<path d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z" fill="#bed8fb" />
						<path d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z" fill="#365e7d" />
						<path d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z" fill="#2b4d66" />
						<path d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z" fill="#4a80aa" />
						<path d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z" fill="#407093" />
						<path d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z" fill="#e4f6ff" />
						<path d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z" fill="#e28086" />
						<path d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z" fill="#dd636e" />
						<path d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z" fill="#ffddce" />
						<path d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z" fill="#ffddce" />
						<path d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z" fill="#ffcbbe" />
						<g fill="#f4fbff">
							<path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
							<path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
						</g>
						<path d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z" fill="#365e7d" />
						<path d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z" fill="#365e7d" />
						<path d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z" fill="#dd636e" />
					</svg>
					${data[i].first_name}
				</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="last_name"                data-export-val="${data[i].last_name}" scope="row">${data[i].last_name}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="phone_number"                data-export-val="${data[i].phone_number}" scope="row">${data[i].phone_number}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="email_address"                data-export-val="${data[i].email_address}" scope="row">${data[i].email_address}</td>
            </tr>` 
            exportRow++           
        }
        this.exportRow = exportRow
        this.renderHTMLBody(html)
    }
    renderHTMLBody (html) {
        html += `       </tbody>
                    </table>
                </div>
            </div>`
        document.getElementById('testerRecordsPage').innerHTML = html
        this.addListeners()
    }
    navigateToGarageRecord (ev, id) {
        changePage(ev, id)  
    }
    openGarageModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'block';
        this.populateGarageTable(this.garageData);
    }
    setupModal() {
        // Create modal elements
        let modalHtml = `
            <div id="myModal" class="tester-record-associated-garages-modal-popup">
                <div class="tester-record-associated-garages-modal-content">
                    <span class="tester-record-associated-garages-close">&times;</span>
                    <h2 class="tester-record-associated-garages-header">Select a Garage</h2>
                    <input type="text" id="searchInput" class="tester-record-associated-garages-search-input" placeholder="Search by trading name...">
                    <table id="garageTable" class="tester-record-associated-garages-table">
                        <thead>
                            <tr>
                                <th>Trading Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Garage rows will be inserted here -->
                        </tbody>
                    </table>
                    <button id="okButton" class="tester-record-associated-garages-ok-button">OK</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        // Modal event listeners
        const modal = document.getElementById('myModal');
        const closeSpan = document.getElementsByClassName('tester-record-associated-garages-close')[0];
        const searchInput = document.getElementById('searchInput');
        const garageTable = document.getElementById('garageTable').getElementsByTagName('tbody')[0];

        closeSpan.onclick = function() {
            modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };

        searchInput.onkeyup = () => {
            const filter = searchInput.value.toLowerCase();
            let filteredData;

            if (filter.startsWith('*') && filter.endsWith('*')) {
                const trimmedFilter = filter.slice(1, -1);
                filteredData = this.garageData.filter(garage =>
                    garage.trading_name.toLowerCase().includes(trimmedFilter)
                );
            } else if (filter.startsWith('*')) {
                const trimmedFilter = filter.slice(1);
                filteredData = this.garageData.filter(garage =>
                    garage.trading_name.toLowerCase().endsWith(trimmedFilter)
                );
            } else if (filter.endsWith('*')) {
                const trimmedFilter = filter.slice(0, -1);
                filteredData = this.garageData.filter(garage =>
                    garage.trading_name.toLowerCase().startsWith(trimmedFilter)
                );
            } else {
                filteredData = this.garageData.filter(garage =>
                    garage.trading_name.toLowerCase().startsWith(filter)
                );
            }

            this.populateGarageTable(filteredData);
        };

        document.getElementById('okButton').onclick = () => {
            if (this.selectedGarageId) {
                console.log('this.recordId ', this.recordId )
                console.log('this.selectedGarageId', this.selectedGarageId)
                let newData = {tester_id: this.recordId , garage_id: this.selectedGarageId}
                createRecord('tester_garages', newData).then(success => {
                    console.log('success', success)
                    let html = `<tr>
                                    <td data-garage-id='${this.selectedGarageId}' class='data-launch-open-garage-record-from-tester-garages-subgrid'>${this.selectedGarageName}</td>
                                    <td>${this.selectedGarageId}</td> 
                                    <td><i class="bi bi-trash data-launch-subgrid-delete-item" data-id='${this.selectedGarageId}'></i></td>       
                                </tr>`
                    document.getElementById('tester-garages-table-body').insertAdjacentHTML('afterbegin', html);
                    
                    modal.style.display = 'none';
                },
                error => {
                    console.error(error)
                })
            } else {
                alert('Please select a garage.');
            }
        };
    }

    populateGarageTable(data) {
        const garageTable = document.getElementById('garageTable').getElementsByTagName('tbody')[0];
        
        // Sort the data by trading_name in alphabetical order
        data.sort((a, b) => {
            const nameA = a.trading_name.toLowerCase();
            const nameB = b.trading_name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    
        garageTable.innerHTML = ''; // Clear the table
        data.forEach(garage => {
            const row = garageTable.insertRow();
            row.setAttribute('data-id', garage.id);
            row.setAttribute('data-garage-name', garage.trading_name);
            row.onclick = () => {
                this.selectGarageRow(row);
            };
            const cell = row.insertCell(0);
            cell.textContent = garage.trading_name;
        });
        
    }

    selectGarageRow(row) {
        const rows = document.getElementById('garageTable').getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.remove('tester-record-associated-garages-selected');
        }
        row.classList.add('tester-record-associated-garages-selected');
        this.selectedGarageId = row.getAttribute('data-id');
        this.selectedGarageName = row.getAttribute('data-garage-name')
        console.log('the garage selected (selectedGarageId) is ', this.selectedGarageId)
    }
    addListeners () {
        console.log('adding event listeners to testers class')
        document.getElementById('testerRecordsPage').addEventListener('click', (event) => {
            event.stopPropagation()
            console.log('here lets go whats going on ')
            if (event.target.classList.contains('data-launch-testers-view-record-click')) {
                console.log('hope i get the right value for the tester')
                let id = event.target.parentElement.dataset.id
                console.log('id of the tester is ', id)
                this.currentRecordId = id
                this.openForm(true, id)
            }
            else if (event.target.classList.contains('data-launch-add-new-tester-record')) {
                this.openForm(false)
            }
            else if (event.target.classList.contains('data-launch-testers-note-close-button')) {
                this.closeNotesModal()
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-note-item')) {
                let id = event.target.attributes["data-note-id"].value
                this.deleteNoteRecord(id)
            }
            else if (event.target.classList.contains('data-launch-save-testers-note')) {
                console.log('data-launch-notes-modal-box-popup save button clicked')
                let subject = document.getElementById(`note_subject_${this.id}`).value
                let note = document.getElementById(`note_body_${this.id}`).value
                console.log('the subject is ', subject)
                console.log('the actual note is ', note)
                let object = {date: this.getFormattedDateTime(), note_subject: subject, note_body: note, note_table: 'testers', tester_record_id: this.id}
                createRecord('data_launch_notes', object).then(res => {
                    console.log(' data note added ? ', res)
                    let newHTMLNoteRow = `<tr id='tester_notes_${this.id}_${res.id}'>
                                            <td>${object.date}</td>
                                            <td>${object.note_subject}</td> 
                                            <td>${object.note_body}</td>
                                            <td>
                                                <i class="bi bi-trash data-launch-subgrid-delete-note-item" data-note-id='${res.id}'></i>
                                            </td>     
                                        </tr>`
                    document.getElementById(`tester_notes_table_body_${this.id}`).innerHTML += newHTMLNoteRow
                    document.getElementById(`note_body_${this.id}`).value = ''
                    document.getElementById(`note_subject_${this.id}`).value = ''
                    this.closeNotesModal()
                },
                    error => {
                    console.log('something went wrong', error)
                    this.closeNotesModal()
                })
            }
            else if (event.target.classList.contains('data-launch-create-new-note-record')) {
                let testerID = event.target.attributes["data-launch-tester-id"].value
                console.log('testerID', testerID)
                /// INVOKE THE NOTES MODAL SECTION HERE ///
                this.openNotesModal();
            }
            else if (event.target.classList.contains('data-launch-open-garage-record-from-tester-garages-subgrid')) {
                console.log('should be opening the garage record about now')
                let garageId = event.target.attributes["data-garage-id"].value
                console.log('garageId is ', garageId)
                changePage(null, garageId, 'garage')
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-item')) {
                let id = event.target.attributes["data-id"].value
                console.log('id of the garage that needs to be deleted is ', id)
                deleteRecord('tester_garages', parseInt(id))
                this.injectDataIntoTheSubgrid()
            }            
            else if (event.target.classList.contains('data-launch-associate-new-garage-record')) {
                console.log('add a new garage record to the tester')
                // this is where this button code is invoked from ///
                this.openGarageModal();
            }
            else if (event.target.classList.contains('data-launch-nav-menu-plus-icon')) {
                this.openForm(false)
            }
            else if (event.target.classList.contains('data-launch-tabs-clickable-testers')) {
                // data-launch-testers
                let x = Array.from(document.getElementsByClassName('data-launch-testers-screen'))
                x.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                let y = Array.from(document.getElementsByClassName('data-launch-tabs-clickable-testers'))
                y.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                let z = Array.from(document.getElementsByClassName('data-launch-tabs-parent-li-testers'))
                z.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                let page = event.target.attributes["data-launch-menu-item"].value
                document.getElementById(`testers_parent_li_${page}`).classList.add('active')
                document.getElementById(`data-launch-testers-${page}`).classList.add('active')
            }
            else if (event.target.classList.contains('data-launch-save-close-record')) {
                this.saveAndClose()
            }
            else if (event.target.classList.contains('data-launch-export-records')) {
                this.export()
            }
            else if (event.target.classList.contains('data-launch-filter-search')) {
                if (event.target.value === '') {
                    let header = event.target.attributes["data-launch-header"].value
                    let value = event.target.value
                    let anyMatches = false
                    for (let i = 0; i < this.filters.length; i++) {
                        if (this.filters[i].header === header) {
                            anyMatches = true
                        }                        
                    }
                    if (anyMatches === true) {
                        this.filterRemove(header,value)
                    }
                }
            }
            else if (event.target.classList.contains('data-launch-table-reset-all-filters')) {
                this.filterResetAll()
            }
            else if (event.target.classList.contains('data-launch-filter-icon')) {
                console.log('is this toggling the filter container?')
                document.getElementById('data-launch-testing-station-filter-container').classList.toggle('data-launch-inactive')
            }
        })
        document.getElementById('testerRecordsPage').addEventListener('change', (event) => {
            if (event.target.classList.contains('data-launch-filter-search') && event.target.value !== '') {
                let header = event.target.attributes["data-launch-header"].value
                let value = event.target.value
                this.filterApply(header,value)
            }
            else if (event.target.classList.contains('data-launch-filter-search') && event.target.checked === true) {
                let header = event.target.attributes["data-launch-header"].value
                let value = event.target.checked
                this.filterApply(header,value)
            }
            else if (event.target.classList.contains('data-launch-filter-search') && event.target.value === '') {
                let header = event.target.attributes["data-launch-header"].value
                console.log('values empty apparently')
                let value = event.target.value
                this.filterRemove(header,value)
            }
            else if (event.target.classList.contains('data-launch-field-editable')) {
                let field = event.target.attributes["data-launch-field"].value
                let recordID = document.getElementById('currentRecordID').innerHTML
                this.data.forEach(row=> {
                    if (row.vtsId === recordID) {
                        console.log('updating data ???', event.target.value)
                        row[field] = event.target.value
                    }
                })
            }
         })
    }
    filterApply (header,value, filterJustRemoved) {
        console.log('filterApply HIT' , header, value, filterJustRemoved)
        // if a filter has just been removed and there are now 0 filters
        if (filterJustRemoved === true && this.filters.length === 0) {
            console.log('filterApply LANDED HERE    if (filterJustRemoved === true && this.filters.length === 0) ', header, value, filterJustRemoved)
            this.filteredData = []
            this.filters = []
            let html = this.buildTableBody(this.data)
            document.getElementById('data-launch-tester-records-table-body').innerHTML = html
        }
        else if (filterJustRemoved === true && this.filters.length >= 1) {
            console.log('filterApply LANDED HERE    else if (filterJustRemoved === true && this.filters.length >= 1) { ', header, value, filterJustRemoved)
            let furtherFilteredData = []
            let data = this.data
            for (let i = 0; i < data.length; i++) {
                let matchAllFilters = true; // Flag to track if the data item matches all filters

                // Iterate over each filter
                for (let j = 0; j < this.filters.length; j++) {
                    const filter = this.filters[j];
                    const header = filter.header;
                    const value = filter.value;

                    // Check if the data item matches the current filter
                    if (!(data[i][header].toUpperCase().includes(value.toUpperCase()) || data[i][header].includes(value))) {
                        // If the data item doesn't match the current filter, set matchAllFilters to false and break the loop
                        matchAllFilters = false;
                        break;
                    }
                }

                // If the data item matches all filters, add it to the filteredData array
                if (matchAllFilters) {
                    furtherFilteredData.push(data[i]);
                }
            }
            let html = this.buildTableBody(furtherFilteredData)
            document.getElementById('data-launch-tester-records-table-body').innerHTML = html
        }
        else if (this.filters.length === 0) {       
            console.log('filterApply LANDED HERE    else if (this.filters.length === 0) {    ', header, value, filterJustRemoved)  
            this.filters.push({header: header, value: value})
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i][header].toUpperCase().includes(value.toUpperCase()) || this.data[i][header].includes(value)) {
                    this.filteredData.push(this.data[i])
                }                
            }
            let html = this.buildTableBody(this.filteredData)
            document.getElementById('data-launch-tester-records-table-body').innerHTML = html
        }
        else {
            // Iterate over each data item
            console.log('filterApply LANDED HERE    else {    ', header, value, filterJustRemoved)  
            let filterMatch = false
            let data = []
            for (let i = 0; i < this.filters.length; i++) {
               if (this.filters[i].header === header) {
                    filterMatch = true
                    this.filters[i].value = value
               }                
            }
            if (filterMatch === false) {
                this.filters.push({header: header, value: value})
                data = this.filteredData
            }
            else {
                if (this.filters.length === 1) {
                    data = this.data
                }
                else {
                    data = this.filteredData
                }
            }
            let furtherFilteredData = []
            for (let i = 0; i < data.length; i++) {
                let matchAllFilters = true; // Flag to track if the data item matches all filters

                // Iterate over each filter
                for (let j = 0; j < this.filters.length; j++) {
                    const filter = this.filters[j];
                    const header = filter.header;
                    const value = filter.value;

                    // Check if the data item matches the current filter
                    if (!(data[i][header].toUpperCase().includes(value.toUpperCase()) || data[i][header].includes(value))) {
                        // If the data item doesn't match the current filter, set matchAllFilters to false and break the loop
                        matchAllFilters = false;
                        break;
                    }
                }

                // If the data item matches all filters, add it to the filteredData array
                if (matchAllFilters) {
                    furtherFilteredData.push(data[i]);
                }
            }
            let html = this.buildTableBody(furtherFilteredData)
            document.getElementById('data-launch-tester-records-table-body').innerHTML = html
        }
    }
    filterRemove (header,value) {
        console.log('filterRemove selected')
        this.filters = this.filters.filter(function (filterRec) {
            return filterRec.header !== header
        })
        this.filterApply(header, value, true)
    }
    filterResetAll () {
        this.filteredData = []
        this.filters = []
        let x = Array.from(document.getElementsByClassName('data-launch-filter-search'))
        x.forEach(el => {
            if (el.attributes['type'].value === 'text' || el.attributes['type'].value === 'date' || el.attributes['type'].value === 'email') {
                el.value = ''
            }
            else if (el.attributes['type'].value === 'checkbox') {
                el.checked = false
            }
        })
        let html = this.buildTableBody(this.data)
        document.getElementById('data-launch-tester-records-table-body').innerHTML = html
    }
    buildTableBody (data) {
        let html = ''
        let exportRow = 0
        if (data.length === 0) {
            html += `<div><h1>Sorry, no records to display</h1></div>`
        }
        else {
            if (this.filters.length === 0) {
                data = this.data
            }
            for (let i = 0; i < data.length; i++) {
                html += `
                <tr class="responsive-table__row export-row" data-export-row="${exportRow}" data-export-header="VTS Site No" data-export-val="${data[i].vtsSiteNo}" data-vts-pro-id="${data[i].vtsId}">
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="VTS ID" data-export-val="${data[i].vtsId}" scope="row">${data[i].vtsId}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--name export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="Trading Name" data-export-val="${data[i].tradingName}" scope="row">
                        <svg class="user-icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                            <path d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z" fill="#cbe2ff" />
                            <path d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z" fill="#bed8fb" />
                            <path d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z" fill="#365e7d" />
                            <path d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z" fill="#2b4d66" />
                            <path d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z" fill="#4a80aa" />
                            <path d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z" fill="#407093" />
                            <path d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z" fill="#e4f6ff" />
                            <path d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z" fill="#e28086" />
                            <path d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z" fill="#dd636e" />
                            <path d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z" fill="#ffddce" />
                            <path d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z" fill="#ffddce" />
                            <path d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z" fill="#ffcbbe" />
                            <g fill="#f4fbff">
                                <path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
                                <path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
                            </g>
                            <path d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z" fill="#365e7d" />
                            <path d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z" fill="#365e7d" />
                            <path d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z" fill="#dd636e" />
                        </svg>
                        ${data[i].tradingName}
                    </td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="Contact Main No"                data-export-val="${data[i].contactMainNo}" scope="row">${data[i].contactMainNo}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="VTS Postcode"                data-export-val="${data[i].vtsPostcode}" scope="row">${data[i].vtsPostcode}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="Date Called"                data-export-val="${data[i].dateCalled}" scope="row">${data[i].dateCalled}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="CPD Needed"                data-export-val="${data[i].cpdNeeded}" scope="row">${data[i].cpdNeeded}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${exportRow}" data-export-header="Consultant"                data-export-val="${data[i].consultant}" scope="row">${data[i].consultant}</td>
                </tr>` 
                exportRow++           
            }
        }      
        return html
    }
    saveAndClose () {
        // this effectively deletes the element, including all of the event listeners, and then creates a new copy with zero event listeners attached
        this.saveDetailsAboutTheRecord()
        const oldElement = document.getElementById('testerRecordsPage');
        const newElement = oldElement.cloneNode(true); // Cloning with all children and attributes
        oldElement.parentNode.replaceChild(newElement, oldElement);
        this.renderHTMLHeader()
    }
    saveDetailsAboutTheRecord () {
        let fieldObjectMeta = this.fieldObjectMeta()
        console.log('fieldObjectMeta', fieldObjectMeta)
        let fields = []
        for (const key in fieldObjectMeta) {
            for (let t = 0; t < fieldObjectMeta[key].fields.length; t++) {
                fields.push(fieldObjectMeta[key].fields[t])
            }
        }
        console.log('all the fields i need to check ', fields)
        console.log('this.newRecord', this.newRecord)
        let createRecordObject = {}
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].type === 'text' ||
                fields[i].type === 'email' ||
                fields[i].type === 'phone' ||
                fields[i].type === 'multi-text' ||
                fields[i].type === 'notes' ||
                fields[i].type === 'date' ) {
                if (document.getElementById(`${fields[i].field}_val`).value) {
                    console.log('this text field contains data ', fields[i], document.getElementById(`${fields[i].field}_val`).value)
                    createRecordObject[fields[i].field] = document.getElementById(`${fields[i].field}_val`).value
                }
            }
            else if (fields[i].type === 'checkbox') {
                if (document.getElementById(`${fields[i].field}_val`).checked) {
                    console.log('this text field contains data ', fields[i], document.getElementById(`${fields[i].field}_val`).checked)
                    let val = document.getElementById(`${fields[i].field}_val`).checked
                    if (val === true) {
                        createRecordObject[fields[i].field] = 1
                    }
                    else {
                        createRecordObject[fields[i].field] = 0
                    }                    
                }
            }
        }
        if (this.newRecord) {
            createRecordObject.id = tester_record_next_id
            createRecord('tester_records', createRecordObject).then(res => {
                    console.log('CREATED NEW TESTER RECORD IN DB', res)
                    tester_record_next_id++
                    this.addNewTableRowToListView(res)
                    this.data.splice(0,0, res)
                },
                err => {
                    console.log(err)
                }
            )
        }
        else {
            createRecordObject.id = this.recordId
            updateRecord('tester_records', this.recordId, createRecordObject).then(
                function success (res) {
                    console.log('UPDATED EXISTING TESTER RECORD ???', res)
                },
                function error (err) {
                    console.log(err)
                }
            )
        }
        console.log('createRecordObject', createRecordObject)      
    }
    addNewTableRowToListView (rec) {
        console.log('addNewTableRowToListView rec', rec)
        let html = `
            <tr class="responsive-table__row export-row" data-export-row="${this.exportRow}" data-export-header="id" data-export-val="${rec.id}" data-id="${rec.id}">
                <td class="responsive-table__body__text responsive-table__body__text--name export-record data-launch-testers-view-record-click" data-export-row="${this.exportRow}" data-export-header="first_name Name" data-export-val="${rec.first_name}" scope="row">
					<svg class="user-icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
						<path d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z" fill="#cbe2ff" />
						<path d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z" fill="#bed8fb" />
						<path d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z" fill="#365e7d" />
						<path d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996 0-13.075-10.599-23.674-23.674-23.674h-8.945v114.978h65.086v-59.635c.001-13.073-10.599-23.673-23.673-23.673z" fill="#2b4d66" />
						<path d="m425.045 372.355c-6.259-6.182-14.001-10.963-22.79-13.745l-69.891-22.128-76.348-2.683-76.38 2.683-69.891 22.128c-23.644 7.486-39.713 29.428-39.713 54.229v19.094c44.789 47.328 107.451 77.568 177.183 79.92 78.128-17.353 143.129-69.576 177.83-139.498z" fill="#4a80aa" />
						<path d="m441.968 431.932v-19.094c0-17.536-8.04-33.635-21.105-44.213-37.111 75.626-110.422 130.268-197.346 141.317 10.492 1.329 21.178 2.038 32.026 2.057 10.423-.016 20.708-.62 30.824-1.782 61.031-7.212 115.485-35.894 155.601-78.285z" fill="#407093" />
						<path d="m261.796 508.168c15.489-30.751 55.822-118.067 44.321-172.609l-50.101-19.499-50.148 19.5c-11.856 56.225 31.37 147.277 45.681 175.29 3.442-.826 6.859-1.721 10.247-2.682z" fill="#e4f6ff" />
						<path d="m288.197 483.789-20.314-79.917h-23.767l-20.264 79.699 25.058 27.897c6.361-1.457 12.634-3.146 18.81-5.057z" fill="#e28086" />
						<path d="m249.302 511.905c2.075.054 4.154.091 6.241.095 2.415-.004 4.822-.046 7.222-.113l12.907-14.259c-10.159 3.564-20.61 6.506-31.309 8.779z" fill="#dd636e" />
						<path d="m298.774 328.183v-45.066h-85.58v45.066c0 23.632 42.79 49.446 42.79 49.446s42.79-25.814 42.79-49.446z" fill="#ffddce" />
						<path d="m352.089 180.318h-16.359c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-26.243 8.674-54.579 8.676-80.823.006l-.031-.01c-11.252-3.717-22.845 4.662-22.845 16.512v9.019c0 9.098-7.375 16.473-16.473 16.473h-16.358v26.938c0 6.883 5.58 12.464 12.464 12.464 2.172 0 3.939 1.701 4.076 3.869 2.628 41.668 37.235 74.654 79.565 74.654 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.939z" fill="#ffddce" />
						<path d="m335.73 180.318c-9.098 0-16.473-7.375-16.473-16.473v-9.015c0-11.851-11.595-20.23-22.847-16.511-3.108 1.027-6.247 1.923-9.407 2.707v88.972c-.438 28.948-16.3 54.142-39.725 67.758 2.861.311 5.763.486 8.706.486 42.33 0 76.937-32.986 79.565-74.654.137-2.167 1.904-3.869 4.076-3.869 6.883 0 12.464-5.58 12.464-12.464v-26.938h-16.359z" fill="#ffcbbe" />
						<g fill="#f4fbff">
							<path d="m213.194 316.06-33.558 27.267 35.192 43.513c4.281 4.168 11.019 4.424 15.605.594l26.465-22.107z" />
							<path d="m298.79 316.06-41.892 49.267 24.874 21.268c4.557 3.896 11.327 3.7 15.651-.453l34.94-42.815z" />
						</g>
						<path d="m213.194 316.06-49.256 24.199c-3.75 1.842-5.256 6.404-3.341 10.117l9.65 18.71c2.501 4.848 1.578 10.756-2.282 14.61-1.987 1.983-4.139 4.131-6.004 5.993-3.338 3.332-4.537 8.255-3.067 12.737 11.651 35.517 67.725 89.828 88.946 109.478 1.427.038 2.857.064 4.29.08-15.389-29.933-69.922-143.655-38.936-195.924z" fill="#365e7d" />
						<path d="m344.019 383.695c-3.861-3.854-4.783-9.762-2.282-14.61l9.65-18.71c1.915-3.713.409-8.275-3.341-10.117l-49.256-24.198c30.978 52.255-23.517 165.929-38.923 195.9 1.448-.025 2.893-.061 4.335-.109 21.265-19.695 77.248-73.94 88.888-109.424 1.47-4.482.271-9.405-3.067-12.737-1.865-1.863-4.017-4.012-6.004-5.995z" fill="#365e7d" />
						<path d="m256.898 365.327-26.06 21.764 13.278 16.781h23.767l13.279-17.771z" fill="#dd636e" />
					</svg>
					${rec.first_name}
				</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${this.exportRow}" data-export-header="last_name"                data-export-val="${rec.last_name}" scope="row">${rec.last_name}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${this.exportRow}" data-export-header="phone_number"                data-export-val="${rec.phone_number}" scope="row">${rec.phone_number}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testers-view-record-click" data-export-row="${this.exportRow}" data-export-header="email_address"                data-export-val="${rec.email_address}" scope="row">${rec.email_address}</td>
            </tr>`
            document.getElementById('data-launch-tester-records-table-body').insertAdjacentHTML('afterbegin', html);
            // document.getElementById('data-launch-testing-station-table-body').innerHTML += html
    }
    generateRandomId () {
        const timestamp = new Date().getTime().toString(16); // Get current timestamp in hexadecimal
        let random = Math.random().toString(16).substring(2); // Get random number in hexadecimal
        random = random.substring(0, 4)
        return random; // Combine timestamp and random number
    }
    fieldObjectMeta () {
        return {
            Summary : {
                meta: {
                    columns: 2,
                    name: 'summary'
                },
                fields: [
                    {
                        field: 'first_name',
                        label: 'First Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'phone_number',
                        label: 'Main Phone',
                        type: 'phone',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'email_address',
                        label: 'Email',
                        type: 'email',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'data_launch_notes',
                        type: 'data_launch_notes',
                        section: 1,
                        column: 2,
                        columnWidth: 2
                    }   
                ]
            },
            Garages: {
                        meta: {
                            columns: 1,
                            name: 'garages'
                        },
                        fields: [
                            {
                                type: 'TestersGaragesSubgrid',
                                column: 1
                            }
                        ]
           }
        }
    }
    buildFormMenu () {        
        let headers = this.fieldObjectMeta()
        let html = ''
        let fistIteration = true
        for (const key in headers) {
            if (fistIteration) {
                html += `<li class="nav-item data-launch-tabs-parent-li-testers active" id="testers_parent_li_${headers[key].meta.name}">
                            <a class="nav-link data-launch-tabs-clickable-testers active" data-launch-menu-item="${headers[key].meta.name}" href="#">${key}</a>
                        </li>` 
                fistIteration = false
            }
            else {
            html +=     `<li class="nav-item data-launch-tabs-parent-li-testers" id="testers_parent_li_${headers[key].meta.name}">
                            <a class="nav-link data-launch-tabs-clickable-testers" data-launch-menu-item="${headers[key].meta.name}" href="#">${key}</a>
                        </li>`   
            }                   
        }
        return html
    }
    buildFormSections (rec, html) {
        let fieldDataObj = this.fieldObjectMeta()        
        let firstIteration = true
        if (rec !== 'NEW FORM') {
            for (const key in fieldDataObj) {
                if (firstIteration) {
                    html += `<div class='data-launch-testers-screen row active' id='data-launch-testers-${fieldDataObj[key].meta.name}'>`
                    firstIteration = false
                }
                else {
                    html += `<div class='data-launch-testers-screen row' id='data-launch-testers-${fieldDataObj[key].meta.name}'>`
                }
                let columns = fieldDataObj[key].meta.columns
                console.log('columns ', columns)
                let colIndex = 0
                for (let i = 0; i < columns; i++) {
                    if (i === 0) {
                        html += `<div class='col-lg-4 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    }
                    else {
                        html += `<div class='col-lg-8 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    }                
                    colIndex = i + 1
                    for (let t = 0; t < fieldDataObj[key].fields.length; t++) {
                        if (fieldDataObj[key].fields[t].column === colIndex) {
                            if (fieldDataObj[key].fields[t].type === 'text') {
                                html += `<div class='data-launch-input-field-container'>
                                        <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                        <input id="${fieldDataObj[key].fields[t].field}_val" placeholder="${fieldDataObj[key].fields[t].label}" type='text' data-launch-field="${rec[fieldDataObj[key].fields[t].field]}" value="${rec[fieldDataObj[key].fields[t].field]}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'phone') {
                                html += `<div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='phone' value="${rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${rec[fieldDataObj[key].fields[t].field]}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'email') {
                                html += ` <div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='email' value="${rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${rec[fieldDataObj[key].fields[t].field]}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'date') {
                                html += ` <div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='date' value="${rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${rec[fieldDataObj[key].fields[t].field]}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'multi-text') {
                                html += `<div class='data-launch-input-field-container data-launch-input-field-container-multi-line'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <textarea id="${fieldDataObj[key].fields[t].field}_val" class='data-launch-input-field-multi-line data-launch-field-editable' data-launch-field="${rec[fieldDataObj[key].fields[t].field]}" data-launch-field-editable">${typeof rec[fieldDataObj[key].fields[t].field] !== undefined ? rec[fieldDataObj[key].fields[t].field] : ''}</textarea>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'checkbox') {
                                html += ` <div class='data-launch-input-field-container-checkbox'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" type='checkbox' class='data-launch-input-field-checkbox data-launch-field-editable' data-launch-field="${rec[fieldDataObj[key].fields[t].field]}" checked="${rec[fieldDataObj[key].fields[t].field]}">
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'data_launch_notes') {
                                html += ` <div class='data-launch-notes-container'>
                                            <div class='data-launch-notes-table-cont'
                                            style="height: 60vh;overflow-y: auto;overflow-x: hidden;"
                                            id='data_launch_testers_notes_table_${this.id}'>
                                            </div>
                                            <button class="data-launch-create-new-note-record modern-button" data-launch-tester-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New Note
                                            </button>
                                        </div>`
                            }                            
                            else if (fieldDataObj[key].fields[t].type === 'subgrid') {
                                html += `<table class="table table-hover data-launch-table-clickable-row">
                                            <thead>
                                                <tr>`
                                fieldDataObj[key].fields[t].fieldLabels.forEach(label => {
                                    html +=         `<th scope="col">${label}</th>`
                                })
                                html += `       </tr>
                                            </thead>
                                        <tbody>`
                                rec[fieldDataObj[key].fields[t].array].forEach(row => {
                                    html += `<tr>`                       
                                    fieldDataObj[key].fields[t].field.forEach(field => {
                                        if (field === 'vtsId') {
                                            html += `<td><a class='data-launch-garage-record-click data-launch-change-page' data-launch-menu-item="garage" data-launch-id='${row[field]}' href='#'>${row[field]}</a></td>`
                                        }
                                        else {
                                            html += `<td>${row[field]}</td>`
                                        }
                                        
                                    })
                                    html += `</tr>`
                                })
                                html += `</tbody>
                                    </table>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'TestersGaragesSubgrid') {
                                html += `<div id='data-launch-testers-associated-garages-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'></div>`
                            }                            
                            else if (fieldDataObj[key].fields[t].type === 'googleMaps') {
                                let googleMapsString = ''
                                for (let j = 0; j < fieldDataObj[key].fields[t].field.length; j++) {
                                    if (fieldDataObj[key].fields[t].field[j].name === 'Address1' ) {
                                        googleMapsString += `${rec[fieldDataObj[key].fields[t].field[j].fieldName]}$20`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'Address2' ) {
                                        googleMapsString += `${rec[fieldDataObj[key].fields[t].field[j].fieldName]}$20`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'Address3' ) {
                                        googleMapsString += `${rec[fieldDataObj[key].fields[t].field[j].fieldName]},`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'City' ) {
                                        googleMapsString += `$20${rec[fieldDataObj[key].fields[t].field[j].fieldName]},`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'County' ) {
                                        googleMapsString += `$20${rec[fieldDataObj[key].fields[t].field[j].fieldName]},`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'Postcode' ) {
                                        googleMapsString += `$20${rec[fieldDataObj[key].fields[t].field[j].fieldName]}`
                                    }
                                }
                                html += `<div style="width: 100%">
                                            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${googleMapsString}+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>            
                                        </div>`
                            }
                        }
                    }
                    html += `</div>`            
                }
                html += `</div>`
            }
        }
        else {
            for (const key in fieldDataObj) {
                if (firstIteration) {
                    html += `<div class='data-launch-testers-screen row active' id='data-launch-testers-${fieldDataObj[key].meta.name}'>`
                    firstIteration = false
                }
                else {
                    html += `<div class='data-launch-testers-screen row' id='data-launch-testers-${fieldDataObj[key].meta.name}'>`
                }
                let columns = fieldDataObj[key].meta.columns
                console.log('columns ', columns)
                let colIndex = 0
                for (let i = 0; i < columns; i++) {
                    if (i === 0) {
                        html += `<div class='col-lg-4 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    }
                    else {
                        html += `<div class='col-lg-8 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    }                
                    colIndex = i + 1
                    for (let t = 0; t < fieldDataObj[key].fields.length; t++) {
                        if (fieldDataObj[key].fields[t].column === colIndex) {
                            if (fieldDataObj[key].fields[t].type === 'text') {
                                html += `<div class='data-launch-input-field-container'>
                                        <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                        <input id="${fieldDataObj[key].fields[t].field}_val" placeholder="${fieldDataObj[key].fields[t].label}" type='text' data-launch-field="" value="" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'phone') {
                                html += `<div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='phone' value="" data-launch-field="" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'email') {
                                html += ` <div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='email' value="" data-launch-field="" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'date') {
                                html += ` <div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='date' value="" data-launch-field="" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'multi-text') {
                                html += `<div class='data-launch-input-field-container data-launch-input-field-container-multi-line'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <textarea id="${fieldDataObj[key].fields[t].field}_val" class='data-launch-input-field-multi-line data-launch-field-editable' data-launch-field="" data-launch-field-editable"></textarea>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'checkbox') {
                                html += ` <div class='data-launch-input-field-container-checkbox'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" type='checkbox' class='data-launch-input-field-checkbox data-launch-field-editable' data-launch-field="" checked="">
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'data_launch_notes') {
                                // do nothing because you can't add a note to a record that has yet to be added to the database as the id 
                                // won't be stored to be able to attach the note to the table
                                html += ``
                            }                            
                            else if (fieldDataObj[key].fields[t].type === 'subgrid') {
                                console.log('do nothing because the data wont be there yet')
                            }                           
                            else if (fieldDataObj[key].fields[t].type === 'googleMaps') {
                                // do nothing
                                console.log('do nothing')                                
                            }
                        }
                    }
                    html += `</div>`            
                }
                html += `</div>`
            }
        }
        return html
    }
    openForm = (bool, id) => {
        let rec;
        if (bool) {
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].id === parseInt(id)) {
                    rec = this.data[i]
                }        
            }            
        }
        let html = ''
        if (rec) {
            this.newRecord = false
            this.recordId = rec.id
            this.id = id
            let googleMapsString = ''
            if (rec.vtsAddress1) {
                googleMapsString += `${rec.vtsAddress1}$20`
            }
            else if (rec.vtsAddress2) {
                googleMapsString += `${rec.vtsAddress2}$20`
            }
            else if (rec.vtsAddress3) {
                googleMapsString += `${rec.vtsAddress3},`
            }
            else if (rec.vtsCity) {
                googleMapsString += `$20${rec.vtsCity},`
            }
            else if (rec.vtsCounty) {
                googleMapsString += `$20${rec.vtsCounty},`
            }
            else if (rec.vtsPostcode) {
                googleMapsString += `$20${rec.vtsPostcode}`
            }
            html = `
            <i class="bi bi-plus data-launch-nav-menu-plus-icon" id="data-launch-nav-menu-plus-icon"></i>
            <div class='container-fluid'>
                            <div class='row'>
                                <div style='display: none' class='data-launch-notes-modal-box-popup-cont' id='data-launch-notes-modal-box-popup'>
                                    <div class="modal-overlay">
                                        <div class="modal-content modern-modal">
                                            <button class='data-launch-testers-note-close-button modern-close-button'>X</button>
                                            <h2 class="modern-modal-title">Add New Note</h2>
                                            <label for="noteSubject" class="modern-modal-label">Subject:</label>
                                            <input type="text" id="note_subject_${this.id}" name="noteSubject" placeholder="Enter subject..." class="modern-modal-input">
                                            <label for="noteBody" class="modern-modal-label">Note:</label>
                                            <textarea id="note_body_${this.id}" name="noteBody" rows="4" placeholder="Enter note..." class="modern-modal-textarea"></textarea>
                                             <div class="modern-modal-footer">
                                                <button class="btn btn-primary data-launch-save-testers-note modern-save-button">Save Note</button>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                <div style='display: none' class='data-launch-confirmation-box-inject' id='data-launch-confirmation-box-inject'></div>
                                <button type="button" id="data-launch-testing-station-save-close" class="btn btn-outline-primary data-launch-save-close-record">Save & Close</button>
                                <div class='data-launch-record-header'>
                                    <h3>${rec.first_name} ${rec.last_name}</h3>
                                    <h3>Tester ID - ${rec.id} </h3><span style='display:none' id='currentRecordID'>${rec.id}</span>                    
                                </div>
                                <div class='data-launch-tabs-container'>
                                    <nav class="navbar navbar-expand-lg navbar-light">
                                        <div class="container-fluid data-launch-form-tabs-container">
                                            <div class="data-launch-form-tabs-container-row">
                                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbarNav">
                                                    <ul class="navbar-nav">
                                                    ${this.buildFormMenu()}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                
                            </div>
                        </div>      
                        ${this.buildFormSections(rec, html)}
                `
        }
        else {
            this.newRecord = true
            html = `
            <i class="bi bi-plus data-launch-nav-menu-plus-icon" id="data-launch-nav-menu-plus-icon"></i>
            <div class='container-fluid'>
                            <div class='row'>
                                <div style='display: none' class='data-launch-confirmation-box-inject' id='data-launch-confirmation-box-inject'></div>
                                <button type="button" id="data-launch-testing-station-save-close" class="btn btn-outline-primary data-launch-save-close-record">Save & Close</button>
                                <div class='data-launch-record-header'>
                                    <h3>New Tester Recorrd</h3>                  
                                </div>
                                <div class='data-launch-tabs-container'>
                                    <nav class="navbar navbar-expand-lg navbar-light">
                                        <div class="container-fluid data-launch-form-tabs-container">
                                            <div class="data-launch-form-tabs-container-row">
                                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbarNav">
                                                    <ul class="navbar-nav">
                                                    ${this.buildFormMenu()}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                
                            </div>
                        </div>      
                        ${this.buildFormSections('NEW FORM', html)}
                `
        }
        document.getElementById('testerRecordsPage').innerHTML = html
        this.injectDataIntoTheSubgrid()
        this.injectNotesIntoSubgrid()
    }
    export = () => {

        const wb = new ExcelJS.Workbook();
        const worksheetName = 'Simple Worksheet';
        const ws = wb.addWorksheet(worksheetName);

        let x = Array.from(document.getElementsByClassName('export-record'))
        let r = Array.from(document.getElementsByClassName('export-row'))


        /// find the column headers and build up the column headers array of objects for exceljs
        let columnHeaders = []            
        for (let i = 0; i < x.length; i++) {            
            if (x[i].getAttribute('data-export-row') == 0){
                columnHeaders.push({
                    header: x[i].getAttribute('data-export-header'),
                    key: x[i].getAttribute('data-export-header'),
                    width: 20                    
                })
            }                     
        }
        // applied the customer column headers to the exceljs worksheet.columns function
        ws.columns = columnHeaders
        
      /// find the data within each row and add it to the excel sheet
        for (let p = 0; p < r.length; p++) {  
            let val = {}  
            for (let i = 0; i < x.length; i++) {              
                if (x[i].getAttribute('data-export-row') == p){
                    val[x[i].getAttribute('data-export-header')] = x[i].getAttribute('data-export-val')
                }                     
            }
            ws.addRow(val)  
        }
        /// write to XLSX and download file
        wb.xlsx.writeBuffer()
        .then(buffer => {
            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${worksheetName}.xlsx`);
        });
        
    }
    injectNotesIntoSubgrid () {
        fetchData('data_launch_notes', 2000).then(res => {
            let reducedArrayForTesterRecordID = []
            for (let i = 0; i < res.length; i++) {
                if (res[i]["note_table"] === 'testers' && res[i]["tester_record_id"] === parseInt(this.id)) {
                    reducedArrayForTesterRecordID.push(res[i])
                }                    
            }
            new SubGrid(reducedArrayForTesterRecordID, `data_launch_testers_notes_table_${this.id}`, 'tester_notes', this.id)
        },
        err => {
            console.error(err);
        }); 
    }
    injectDataIntoTheSubgrid () {
        fetchData('tester_garages', 100).then(res => {
                console.log('tester_garages res', res);
                let reducedArrayForTesterRecordID = []
                for (let i = 0; i < res.length; i++) {
                    if (res[i]["tester_id"] === parseInt(this.id)) {
                        reducedArrayForTesterRecordID.push(res[i])
                    }                    
                }
                console.log('reducedArrayForTesterRecordID', reducedArrayForTesterRecordID)
                let data = []
                for (let i = 0; i < reducedArrayForTesterRecordID.length; i++) {
                    for (let t = 0; t < garageData.length; t++) {
                        if (reducedArrayForTesterRecordID[i]["garage_id"] === garageData[t].id) {
                            data.push({name: garageData[t].trading_name, id: garageData[t].id, tester_garages_id: reducedArrayForTesterRecordID[i].id})
                        }                        
                    }
                }        
                new SubGrid(data, 'data-launch-testers-associated-garages-cont', 'tester_garages');
            },
            err => {
                console.error(err);
            }
        );        
    }
    
    openNotesModal () {
        document.getElementById('data-launch-notes-modal-box-popup').style.display = 'block'
    }
    closeNotesModal () {
        document.getElementById('data-launch-notes-modal-box-popup').style.display = 'none'
    }
    deleteNoteRecord (id) {
        console.log('here to delete the note record ', id)
        deleteRecord('data_launch_notes', id).then(res => {
            console.log('succesfully dfeleted note ? ', res)
            document.getElementById(`tester_notes_${this.id}_${id}`).style.display = 'none'
        },
        error => {
            console.error(error)
        })
    }
    getFormattedDateTime() {
        const now = new Date();
        
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = now.getFullYear();
    
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
    
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
    }
}
