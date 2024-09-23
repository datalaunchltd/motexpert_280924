// const e = require("express")
console.log('garages file')

class Garage {
    constructor(id) {
        console.log('hit the garages section')
        this.filteredData = []
        this.filters = []
        this.testerData = testersData
        this.selectedTesterId = null;
        this.motCalibrationDocumentFiles = []
        this.setupModal();
        this.data = garageData
        document.getElementById('data-launch-side-bar').classList.remove('data-launch-activate-menu')
        if (id) {
            this.id = id
            let rec;
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].id === parseInt(id)) {
                    rec = this.data[i]
                }        
            }
            this.openForm(true, rec)
            this.addListeners()
        }
        else {
           this.renderHTMLHeader()
        }   
    }
    renderHTMLHeader () {
        let html = `
        <!-- Page wrapper/Container Section -->
        <div class="container" style="height: 80vh; overflow-y: auto;">
            <!-- Responsive Table Section -->
            <table class="responsive-table" style="width: 100%; border-collapse: collapse;">
                <!-- Responsive Table Header Section -->
                <thead class="responsive-table__head" style="position: sticky; top: 0; z-index: 1;">
                    <tr class="responsive-table__row data-launch-garage-list-view-row">
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">VTS</th>
                        <th class="responsive-table__head__title responsive-table__head__title--name">Contact</th>  
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">Company</th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">Postcode</th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">Garage Name</th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">Opening Hours Start</th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">Opening Hours End</th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">Charge Rate</th>
                        <!-- 
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                          <i class="bi bi-funnel data-launch-filter-icon"></i>
                          <i class="bi bi-filetype-xls data-launch-export-icon data-launch-export-records"></i>
                          <i class="bi bi-arrow-counterclockwise data-launch-reset-filters-icon data-launch-table-reset-all-filters"></i>                                            
                        </th>
                        -->
                    </tr>
                    <tr class="responsive-table__row data-launch-inactive data-launch-garage-list-view-row" id='data-launch-garage-filter-container'>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="vtsId" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--name">
                            <input type="text" class="data-launch-filter-search" data-launch-header="aedmName" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="companyName" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="phoneNo" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="garageName" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="openingHoursStart" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="openingHoursEnd" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="chargeRate" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <!-- Responsive Table Body Section -->
                <tbody class="responsive-table__body" id="data-launch-garage-table-body">
                `
        this.renderHTMLData(html)
    }
    renderHTMLData(html) {
        // console.log('html is ', html)
        // console.log('this.data is ', this.data)
        let data = this.data
        let exportRow = 0
        for (let i = 0; i < data.length; i++) {
            html += `
            <tr class="responsive-table__row data-launch-garage-list-view-row  export-row" data-export-row="${exportRow}" data-export-header="VTS Site No"                 data-export-val="${data[i].vtsSiteNo}" data-vts-pro-id=${data[i].id}>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="VTS ID"                data-export-val="${data[i].id}" scope="row">${typeof data[i].id === 'undefined' ? '': data[i].id}</td>
                <td class="responsive-table__body__text responsive-table__body__text--name export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="AEDM Name"                data-export-val="${data[i].aedmName}" scope="row">
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
					${typeof data[i].aedmName === 'undefined' ? '': data[i].aedmName}
				</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Company Name"          data-export-val="${data[i].trading_name}" scope="row">${typeof data[i].trading_name === 'undefined' ? '': data[i].trading_name}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Postcode"                data-export-val="${data[i].vts_postcode}" scope="row">${typeof data[i].vts_postcode === 'undefined' ? '': data[i].vts_postcode}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Garage Name"                data-export-val="${data[i].trading_name}" scope="row">${typeof data[i].trading_name === 'undefined' ? '': data[i].trading_name}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Opening Hours"                data-export-val="${data[i].openingHoursStart}" scope="row">${typeof data[i].openingHoursStart === 'undefined' ? '': data[i].openingHoursStart}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Closing Hours"                data-export-val="${data[i].openingHoursEnd}" scope="row">${typeof data[i].openingHoursEnd === 'undefined' ? '': data[i].openingHoursEnd}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Charge Rate"                data-export-val="${data[i].chargeRate}" scope="row">${typeof data[i].chargeRate === 'undefined' ? '': data[i].chargeRate}</td>
            </tr>` 
            exportRow++           
        }
        this.renderHTMLBody(html)
    }
    renderHTMLBody (html) {
        html += `       </tbody>
                    </table>
                </div>
            </div>`
        document.getElementById('garagePage').innerHTML = html
        this.addListeners()
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
            let exportRow = 0
            for (let i = 0; i < data.length; i++) {
                html += `
                <tr class="responsive-table__row data-launch-garage-list-view-row  export-row" data-export-row="${exportRow}" data-export-header="VTS Site No"                 data-export-val="${data[i].vtsSiteNo}" data-vts-pro-id=${data[i].vtsId}>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="VTS ID"                data-export-val="${data[i].vtsId}" scope="row">${data[i].vtsId}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--name export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="AEDM Name"                data-export-val="${data[i].aedmName}" scope="row">
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
                        ${data[i].aedmName}
                    </td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Company Name"          data-export-val="${data[i].trading_name}" scope="row">${data[i].trading_name}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Postcode"                data-export-val="${data[i].vts_postcode}" scope="row">${data[i].vts_postcode}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Garage Name"                data-export-val="${data[i].trading_name}" scope="row">${data[i].trading_name}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Opening Hours"                data-export-val="${data[i].openingHoursStart}" scope="row">${data[i].openingHoursStart}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Closing Hours"                data-export-val="${data[i].openingHoursEnd}" scope="row">${data[i].openingHoursEnd}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-garage-list-view-record-click" data-export-row="${exportRow}" data-export-header="Charge Rate"                data-export-val="${data[i].chargeRate}" scope="row">${data[i].chargeRate}</td>
                </tr>` 
                exportRow++           
            }
        }
        return html
    }
    sendSMS () {
        console.log('test')
        // try {
        //     const result = await smsapi2.sms.sendSms('+447584433817', 'My first message!');
        
        //     console.log(result);
        //     } catch (err) {
        //     console.log(err);
        //     }
    }
    openTesterModal() {
        const modal = document.getElementById('myGarageTesterModal');
        modal.style.display = 'block';
        this.populateTesterTable(this.testerData);
    }
    
    setupModal() {
        // Create modal elements
        let modalHtml = `
            <div id="myGarageTesterModal" class="garage-record-associated-testers-modal-popup">
                <div class="garage-record-associated-testers-modal-content">
                    <span class="garage-record-associated-testers-close">&times;</span>
                    <h2 class="garage-record-associated-testers-header">Select a Tester</h2>
                    <input type="text" id="garageTestersSearchInput" class="garage-record-associated-testers-search-input" placeholder="Search by tester name...">
                    <table id="testersTable" class="garage-record-associated-testers-table">
                        <thead>
                            <tr>
                                <th>Tester Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Tester rows will be inserted here -->
                        </tbody>
                    </table>
                    <button id="testers-ok-Button" class="garage-record-associated-testers-ok-button">OK</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    
        // Modal event listeners
        const modal = document.getElementById('myGarageTesterModal');
        const closeSpan = document.getElementsByClassName('garage-record-associated-testers-close')[0];
        const searchInput = document.getElementById('garageTestersSearchInput');
        const testerTable = document.getElementById('testersTable').getElementsByTagName('tbody')[0];
    
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
            console.log('filteredData is ', filteredData)
    
            if (filter.startsWith('*') && filter.endsWith('*')) {
                const trimmedFilter = filter.slice(1, -1);
                filteredData = this.testerData.filter(tester =>
                    tester.first_name.toLowerCase().includes(trimmedFilter)
                );
            } else if (filter.startsWith('*')) {
                const trimmedFilter = filter.slice(1);
                filteredData = this.testerData.filter(tester =>
                    tester.first_name.toLowerCase().endsWith(trimmedFilter)
                );
            } else if (filter.endsWith('*')) {
                const trimmedFilter = filter.slice(0, -1);
                filteredData = this.testerData.filter(tester =>
                    tester.first_name.toLowerCase().startsWith(trimmedFilter)
                );
            } else {
                filteredData = this.testerData.filter(tester =>
                    tester.first_name.toLowerCase().startsWith(filter)
                );
            }
    
            this.populateTesterTable(filteredData);
        };
    
        document.getElementById('testers-ok-Button').onclick = () => {
            if (this.selectedTesterId) {
                let newData = { garage_id: parseInt(this.id), tester_id: this.selectedTesterId };
                console.log('new record to add to the garage_testers table', newData)
                createRecord('tester_garages', newData);
                this.injectDataIntoAssociatedTestersSubgrid();
                modal.style.display = 'none';
            } else {
                alert('Please select a tester.');
            }
        };
    }
    
    populateTesterTable(data) {
        const testerTable = document.getElementById('testersTable').getElementsByTagName('tbody')[0];
        console.log('what does the data say ? ', data)
        // Sort the data by tester name in alphabetical order
        data.sort((a, b) => {
            const nameA = a.first_name.toLowerCase();
            const nameB = b.first_name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    
        testerTable.innerHTML = ''; // Clear the table
        data.forEach(tester => {
            const row = testerTable.insertRow();
            row.setAttribute('data-id', tester.id);
            row.onclick = () => {
                this.selectTesterRow(row);
            };
            const cell = row.insertCell(0);
            cell.textContent = tester.first_name + ' ' + tester.last_name
        });
    }  
    
    selectTesterRow(row) {
        const rows = document.getElementById('testersTable').getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.remove('garage-record-associated-testers-selected');
        }
        row.classList.add('garage-record-associated-testers-selected');
        this.selectedTesterId = row.getAttribute('data-id');
        console.log(' this.selectedTesterId  is ',  this.selectedTesterId )
    }

    openMotEquipmentModal () {
        document.getElementById('data-launch-mot-equipment-modal-box-popup').style.display = 'block'
    }
    closeMotEquipmentModal () {
        document.getElementById('data-launch-mot-equipment-modal-box-popup').style.display = 'none'
    }

    saveNewMotEquipment () {
        console.log('saveNewMotEquipment save button clicked')
        let equipmentType = document.getElementById(`mot_equipment_type_${this.id}`).value
        let make = document.getElementById(`mot_equipment_make_${this.id}`).value
        let model = document.getElementById(`mot_equipment_model_${this.id}`).value
        let serial_no = document.getElementById(`mot_equipment_serial_no_${this.id}`).value
        let bay = document.getElementById(`mot_equipment_bay_${this.id}`).value
        let object = {
                        equipment_type: equipmentType,
                        make: make,
                        model: model,
                        serial_no: serial_no,
                        bay: bay,
                        garage_id: this.id                    
        }
        createRecord('data_launch_mot_equipment', object).then(res => {
            console.log(' data_launch_mot_equipment note added ? ', res)
            let newHTMLNoteRow = `<tr id='garage_mot_equipment_${this.id}_${res.id}'>
                    <td>${res.equipment_type}</td>
                    <td>${res.make}</td>
                    <td>${res.model}</td>
                    <td>${res.serial_no}</td>
                    <td>${res.bay}</td> 
                    <td><i class="bi bi-trash data-launch-subgrid-delete-mot-equipment-item" data-mot-equipment-id='${res.id}'></i></td>             
                </tr>`
            document.getElementById(`garage_mot_equipment_tbody_${this.id}`).innerHTML += newHTMLNoteRow
            document.getElementById(`mot_equipment_type_${this.id}`).value = ''
            document.getElementById(`mot_equipment_make_${this.id}`).value = ''
            document.getElementById(`mot_equipment_model_${this.id}`).value = ''
            document.getElementById(`mot_equipment_serial_no_${this.id}`).value = ''
            document.getElementById(`mot_equipment_bay_${this.id}`).value = ''
            this.closeMotEquipmentModal()
        },
            error => {
            console.log('something went wrong', error)
            this.closeMotEquipmentModal()
        })
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

    closeTheSimpleImageUploadWindow (files) {
        console.log('files are ', files)
        console.log('garages close the simple image upload window selected' )
        /// all the below code needs to be refactored for a garage class, not the testers class


        document.getElementById('simple-file-upload-window').classList.remove('active')
        document.getElementById('data-launch-simple-image-upload-close-button-garages').classList.remove('active')        
        // document.getElementById('simple-file-upload-window').innerHTML = `<input id="uploader-preview-here-1335" class="simple-file-upload" type="hidden" data-template="frosty" data-maxFileSize="50">`
        console.log('files for the image upload', files)
        
        files.forEach(file => {
            let match = false
            for (let i = 0; i < this.motCalibrationDocumentFiles.length; i++) {
                if (this.motCalibrationDocumentFiles[i].cdnUrl === file.cdnUrl) {
                    match = true
                }
            }
            if (match === false) {
                this.motCalibrationDocumentFiles.push(file)
            }        
        })
        let html = ''
        for (let i = 0; i < this.motCalibrationDocumentFiles.length; i++) {
            html += `
                <tr id='garages_mot_calibration_files_row_${i}'>
                    <td id='garages_mot_calibration_files_row_${i}_name'>${this.motCalibrationDocumentFiles[i].name}</td>
                    <td id='garages_mot_calibration_files_row_${i}_type'>${this.motCalibrationDocumentFiles[i].type}</td>
                    `
            if (this.motCalibrationDocumentFiles[i].type === 'application/pdf') {
                html += `<td id='garages_mot_calibration_files_row_${i}_cdnUrl'><a target="_blank" href="${this.motCalibrationDocumentFiles[i].cdnUrl}"><i class="bi bi-file-earmark-pdf-fill"></i></a></td>`
            }
            else if (this.motCalibrationDocumentFiles[i].type === 'application/msword') {
                html += `<td id='garages_mot_calibration_files_row_${i}_cdnUrl'><a target="_blank" href="${this.motCalibrationDocumentFiles[i].cdnUrl}"><i class="bi bi-file-earmark-word-fill"></i></a></td>`
            }
            else {
                html += `<td id='garages_mot_calibration_files_row_${i}_cdnUrl'><a target="_blank" href="${this.motCalibrationDocumentFiles[i].cdnUrl}"><img style='height: 50px; width: 50px;' src="${this.motCalibrationDocumentFiles[i].cdnUrl}"></a></td>`
            }
            html += `
                    <td><i class="bi bi-trash data-launch-subgrid-delete-tester-training-document-item" data-row='${i}' data-id='${this.motCalibrationDocumentFiles[i].id}'></i></td>  
                </tr>
            `            
        }
        document.getElementById(`garageMotCalibrationsDocumentsTableBody_${this.id}`).innerHTML = html
    }
   
    addListeners () {
        document.getElementById('garagePage').addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('clicked the garages section')
            if (event.target.classList.contains('data-launch-garage-list-view-record-click')) {
                let id = event.target.parentElement.dataset.vtsProId
                this.currentRecordId = id
                let rec;
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].id === parseInt(id)) {
                        rec = this.data[i]
                    }        
                }
                this.openForm(true, rec)
            }

            //// START OF MOT EQUIPMENT LISTENERS

            // MOT Equipment Subgrid Modal Handlers 
                else if (event.target.classList.contains('mot-equipment-close')) {
                    document.getElementById('data-launch-mot-equipment-modal-box-popup').style.display = 'none';
                }
                else if (event.target.classList.contains('data-launch-save-mot-equipment-btn')) {
                    document.getElementById('data-launch-mot-equipment-modal-box-popup').style.display = 'none';
                    this.saveNewMotEquipment();
                }
                else if (event.target.classList.contains('data-launch-create-new-mot-equipment-record')) {
                    this.showMotEquipmentModal();
                }
                else if (event.target.classList.contains('data-launch-table-clickable-mot-equipment-row')) {
                    let id = event.target.attributes["data-id"].value;
                    this.showMotEquipmentDetails(id);
                }
                else if (event.target.classList.contains('data-launch-subgrid-delete-mot-equipment-item')) {
                    let id = event.target.attributes["data-id"].value;
                    deleteRecord('data_launch_mot_equipment', parseInt(id));
                    document.getElementById(`garage_mot_equipment_${this.id}_${id}`).style.display = 'none';
                }



            ///// END OF MOT EQUIPMENT LISTENERS






            /// START of QC CHECKERS FOR BIKES LISTENERS
            else if (event.target.classList.contains('qc-checker-for-bike-close')) {
                document.getElementById('qcCheckerForBikeModal').style.display = 'none';
            }
            else if (event.target.classList.contains('data-launch-save-qc-checkers-for-bike-btn')) {
                document.getElementById('qcCheckerForBikeModal').style.display = 'none';
                this.saveNewQcCheckersForBikeRecord();
            }
            else if (event.target.classList.contains('data-launch-create-new-qc-checkers-for-bikes-record')) {
                this.showQcCheckersForBikeModal();
            }
            else if (event.target.classList.contains('data-launch-table-clickable-qc-checker-bike-record')) {
                let id = event.target.attributes["data-id"].value;
                this.showQcCheckersForBikeDetails(id);
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-qc-checker-bike-item')) {
                let id = event.target.attributes["data-id"].value;
                deleteRecord('data_launch_qc_checkers_for_bike', parseInt(id));
                document.getElementById(`qcCheckersForBike_${this.id}_${id}`).style.display = 'none';
            }
            ///// end of QC CHECKERS FOR BIKES LISTENERS


            

            else if (event.target.classList.contains('data-launch-create-new-mot-calibration-record')) {
                this.showMotCalibrationModal()                
            }
            else if (event.target.classList.contains('data-launch-create-new-mot-site-audit-record')) {
                this.showMotSiteAuditModal();
            }
            else if (event.target.classList.contains('data-launch-create-new-qc-checkers-record')) {
                this.showQcCheckersModal();
            }
            else if (event.target.classList.contains('data-launch-create-new-booking-record')) {
                this.showGarageBookingsModal()
            }
            else if (event.target.classList.contains('data-launch-create-new-defect-report-record')) {
                this.showDefectReportsModal()
            }
            else if (event.target.classList.contains('data-launch-create-new-mot-bay-cleaning-record')) {
                this.showMotBayCleaningLogModal()
            }            
            else if (event.target.classList.contains('data-launch-table-clickable-mot-site-audit-record')) {
                let id = event.target.attributes["data-id"].value
                this.showMotSiteAuditDetails(id);
            }




////////////////// MOT EQUIPMENT HERE/////



            else if (event.target.classList.contains('data-launch-table-clickable-mot-equipment-row')) {
                // let id = event.target.attributes["data-id"].value
                // this.showMOt(id);
            }
            







//////////////////////////////////////////////////////


            else if (event.target.classList.contains('data-launch-table-clickable-defect-report-record')) {
                let id = event.target.attributes["data-id"].value
                this.showDefectReportsDetails(id);                
            }
            else if (event.target.classList.contains('data-launch-table-clickable-mot-bay-cleaning-log-record')) {
                let id = event.target.attributes["data-id"].value
                this.showMotBayCleaningLogDetails(id);                
            }      
            else if (event.target.classList.contains('data-launch-table-clickable-garage-booking-record')) {
                let id = event.target.attributes["data-id"].value
                this.showGarageBookingsDetails(id);
            }
            else if (event.target.classList.contains('data-launch-table-clickable-qc-checker-record')) {
                let id = event.target.attributes["data-id"].value
                this.showQcCheckersDetails(id);
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-mot-site-audit-item')) {
                let id = event.target.attributes["data-id"].value
                console.log('id of the mot site  audit that needs to be deleted is ', id)
                deleteRecord('data_launch_mot_site_audits', parseInt(id))
                document.getElementById(`motsiteaudit_${this.id}_${id}`).style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-garage-booking-item')) {
                let id = event.target.attributes["data-id"].value
                console.log('id of the garage booking that needs to be deleted is ', id)
                deleteRecord('data_launch_garage_bookings', parseInt(id))
                document.getElementById(`garageBookings_${this.id}_${id}`).style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-qc-checker-item')) {
                let id = event.target.attributes["data-id"].value
                deleteRecord('data_launch_qc_checkers_for_car', parseInt(id))
                document.getElementById(`qccheckers_${this.id}_${id}`).style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-defect-report-item')) {
                let id = event.target.attributes["data-id"].value
                deleteRecord('data_launch_defect_reports', parseInt(id))
                document.getElementById(`defectReports_${this.id}_${id}`).style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-mot-calibration-delete-item')) {
                let id = event.target.attributes["data-id"].value
                deleteRecord('data_launch_mot_calibration', parseInt(id))
                document.getElementById(`motcalibration_${this.id}_${id}`).style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-mot-bay-cleaning-log-item')) {
                let id = event.target.attributes["data-id"].value
                deleteRecord('data_launch_mot_bay_cleaning_log', parseInt(id))
                document.getElementById(`motBayCleaningLog_${this.id}_${id}`).style.display = 'none'
            }            
            else if (event.target.classList.contains('data-launch-table-clickable-mot-calibration-row')) {
                let id = event.target.attributes["data-id"].value
                this.showMotCalibrationDetails(id);
            }
            else if (event.target.classList.contains('data-launch-upload-garages-mot-calibration-document')) {
                document.getElementById('simple-file-upload-window').classList.add('active')                
                document.getElementById('data-launch-simple-image-upload-close-button-garages').classList.add('active')
                if (this.motCalibrationDocumentFiles.length !== 0) {
                    document.getElementById('fileListwidget0').innerHTML = "Click Here To Add More Files"
                    document.getElementById('fileListwidget0').classList.add('btn')
                    document.getElementById('fileListwidget0').classList.add('btn-primary')
                    document.getElementById('fileListwidget0').classList.add('data-launch-simple-file-upload-button')
                }
                else {
                    document.getElementById('fileListwidget0').innerHTML = "Click Here To Add File(s)"
                    document.getElementById('fileListwidget0').classList.add('btn')
                    document.getElementById('fileListwidget0').classList.add('btn-primary')
                    document.getElementById('fileListwidget0').classList.add('data-launch-simple-file-upload-button')
                    document.getElementById('simple-file-upload-button-widget0').innerHTML = "Click Here To Add File(s)"
                    document.getElementById('simple-file-upload-button-widget0').classList.add('data-launch-simple-file-upload-button') 
                }
            }
            else if (event.target.classList.contains('data-launch-simple-image-upload-close-button-garages')) {
                document.getElementById('simple-file-upload-window').classList.remove('active')
                document.getElementById('data-launch-simple-image-upload-close-button-garages').classList.remove('active')
            }
            else if (event.target.classList.contains('mot-save-audit-btn')) {
                this.saveNewMotAuditRecord()
                document.getElementById('motSiteAuditModal').style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-save-qc-checkers-btn')) {
                this.saveNewQcCheckersRecord()
                document.getElementById('qcCheckerModal').style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-save-site-audit-btn')) {
                this.saveNewMotAuditRecord()
                document.getElementById('motSiteAuditModal').style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-save-garage-bookings-btn')) {
                document.getElementById('garageBookingModal').style.display = 'none'
                this.saveNewGarageBookingRecord()                
            }
            else if (event.target.classList.contains('data-launch-save-mot-bay-cleaning-log-btn')) {
                document.getElementById('motBayCleaningLogModal').style.display = 'none'
                this.saveNewMotBayCleaningLogRecord()                
            }            
            else if (event.target.classList.contains('data-launch-garage-modal-close')) {
                document.getElementById('garageBookingModal').style.display = 'none'              
            }
            else if (event.target.classList.contains('defect-report-close')) {
                document.getElementById('defectReportModal').style.display = 'none'              
            }
            else if (event.target.classList.contains('garage-booking-close')) {
                document.getElementById('garageBookingModal').style.display = 'none'              
            }          
            else if (event.target.classList.contains('mot-bay-cleaning-log-close')) {
                document.getElementById('motBayCleaningLogModal').style.display = 'none'              
            }
            else if (event.target.classList.contains('data-launch-save-defect-report-btn')) {
                document.getElementById('defectReportModal').style.display = 'none'
                this.saveNewDefectReportsRecord()               
            }
            else if (event.target.classList.contains('qc-checker-close')) {
                document.getElementById('qcCheckerModal').style.display = 'none'              
            }              
            else if (event.target.classList.contains('mot-site-audit-close')) {
                document.getElementById('motSiteAuditModal').style.display = 'none'
            }
            else if (event.target.classList.contains('mot-calibration-close')) {
                document.getElementById('motCalibrationModal').style.display = 'none'
            }
            else if (event.target.classList.contains('data-launch-save-mot-calibration-btn')) {
                document.getElementById('motCalibrationModal').style.display = 'none'
                this.saveNewMotCalibration()               
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-mot-equipment-item')) {
                let id = event.target.attributes["data-mot-equipment-id"].value
                console.log('id of the mot equipment that needs to be deleted is ', id)
                deleteRecord('data_launch_mot_equipment', parseInt(id))
                document.getElementById(`garage_mot_equipment_${this.id}_${id}`).style.display = 'none'
            }  
            else if (event.target.classList.contains('data-launch-filter-icon')) {
                console.log('is this toggling the filter container?')
                document.getElementById('data-launch-garage-filter-container').classList.toggle('data-launch-inactive')
            }
            else if (event.target.classList.contains('data-launch-create-new-mot-equipment-record')) {
                console.log('data-launch-create-new-mot-equipment-record', 'creating new MOT Equipment record')
                this.openMotEquipmentModal()
            }
            else if (event.target.classList.contains('data-launch-mot-equipment-close-button')) {
                this.closeMotEquipmentModal()
            }
            else if (event.target.classList.contains('data-launch-save-mot-equipment')) {
                this.saveNewMotEquipment()
            }    

            
            else if (event.target.classList.contains('data-launch-associate-new-tester-record')) {
                console.log('add a new tester record to the garage')
                // this is where this button code is invoked from ///
                this.openTesterModal();
            }
            else if (event.target.classList.contains('data-launch-open-tester-record-from-garage-testers-subgrid')) {
                console.log('should be opening the tester record about now')
                let testerId = event.target.attributes["data-tester-id"].value
                console.log('testerId is ', testerId)
                changePage(null, testerId, 'testerRecords')
            }
            else if (event.target.classList.contains('data-launch-subgrid-delete-item')) {
                let id = event.target.attributes["data-id"].value
                console.log('id of the garage that needs to be deleted is ', id)
                deleteRecord('tester_garages', parseInt(id))
                this.injectDataIntoAssociatedTestersSubgrid()
            } 
            else if (event.target.classList.contains('data-launch-table-reset-all-filters')) {
                this.filterResetAll()
            }
            else if (event.target.classList.contains('data-launch-send-user-login-details-email')) {
                var emailInput = document.querySelector('input[placeholder="Email Username"]');
                var pwdInput = document.querySelector('input[placeholder="Password"]');
                var pwdValue = pwdInput.value
                var emailValue = emailInput.value;
                let firstName = document.querySelector('input[placeholder="First Name"]').value;
                console.log(emailValue);
                var emailParams = {
                    to_email: emailValue, // Replace with the recipient's email address
                    from_name: 'MOT Expert',
                    message: `Hello ${firstName}, \n
                                Here are your login details \n
                              Username: ${emailValue} \n
                              Password: ${pwdValue}      
                    `
                };
            
                // Send the email
                emailjs.send('service_dlqsqml', 'template_9q4c1yd', emailParams)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert(`Login Details Successfully Sent to Email \n ${emailValue}`)
                    }, function(error) {
                        console.error('FAILED...', error);
                    });
            }
            else if (event.target.classList.contains('data-launch-garage-mot-calibration-record-click')) {
                console.log('clicked an item in the MOT Calibration subgrid')
                let motCalId = event.target.attributes["data-launch-mot-cal-id"].value
                let vtsId = event.target.attributes["data-launch-vts-id"].value
                document.getElementById('garagePageScreenOverlay').style.display = 'block'
                document.getElementById('data-launch-page-navbar').style.backgroundColor = 'lightgrey'                     
                this.openMotCalibrationForm(motCalId, vtsId)
            }
            else if (event.target.classList.contains('data-launch-modal-close-window')) {
                this.closeModal()
            }
            else if (event.target.classList.contains('data-launch-table-garages-new-record')) {
                console.log('clicked new record')
                this.openForm(false)
            }
            else if (event.target.classList.contains('data-launch-send-sms')) {
                this.sendSMS()
            }
            else if (event.target.classList.contains('data-launch-nav-menu-plus-icon')) {
                this.openForm(false)
            }               
            else if (event.target.classList.contains('data-launch-tabs-clickable-garages')) {
                let x = Array.from(document.getElementsByClassName('data-launch-garages-screen'))
                x.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                let y = Array.from(document.getElementsByClassName('data-launch-tabs-clickable-garages'))
                y.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                let z = Array.from(document.getElementsByClassName('data-launch-tabs-parent-li-garages'))
                z.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                console.log('event.target', event)
                let page = event.target.attributes["data-launch-menu-item"].value
                document.getElementById(`garages_parent_li_${page}`).classList.add('active')
                document.getElementById(`data-launch-garages-${page}`).classList.add('active')
                if (page === 'motequipment') {
                    new MOTEquipment('data-launch-garages-motequipment')
                }
                else if (page === 'motcalibration') {
                    new MOTCalibration('data-launch-garages-motcalibration')
                }
                else if (page === 'cartqi') {
                    this.cartqi()
                    // new CarTqi('data-launch-garages-cartqi')
                }
            }
            else if (event.target.classList.contains('data-launch-save-close-record')) {
                console.log('save close record selected')
                this.saveAndClose()
            }
            else if (event.target.classList.contains('data-launch-export-records')) {
                console.log('export selected')
                this.export()
            }
            else if (event.target.classList.contains('data-launch-close-modal-popup')) {
                console.log('close modal popup')
            }

            /// car tqi listeners
            else if  (event.target.classList.contains('data-launch-car-tqi-modal-close')) {
                document.getElementById('cartqiPageModalPopup').style.display = 'none'
                document.getElementById('data-launch-save-close-garage-record').style.display = 'block'
            }
            else if (event.target.classList.contains('data-launch-car-tqi-list-view-record-click')) {
                let vtsID = event.target.attributes["data-launch-vts-id"].value
                let obj = {}
                this.dataCarTQI.forEach(row => {
                    if (row.vtsID = vtsID) {
                        obj = row.rawData
                    }
                })
                this.openModal(obj)
            }
            else if (event.target.classList.contains('data-launch-upload-car-tqi-file')) {
                console.log('hit here,,,,, data-launch-upload-car-tqi-files')
                this.importCarTQI()
            }
        })
        document.getElementById('garagePage').addEventListener('change', (event) => {
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
                console.log('change event', event)
                let field = event.target.attributes["data-launch-field"].value
                let recordID = document.getElementById('currentRecordID').innerHTML
                console.log('field', field)
                console.log('recordID', recordID)
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
            document.getElementById('data-launch-garage-table-body').innerHTML = html
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
            document.getElementById('data-launch-garage-table-body').innerHTML = html
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
            document.getElementById('data-launch-garage-table-body').innerHTML = html
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
            document.getElementById('data-launch-garage-table-body').innerHTML = html
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
        document.getElementById('data-launch-garage-table-body').innerHTML = html
    }
    closeModal () {
        document.getElementById('garagePageScreenOverlay').style.display = 'none'                 
        document.getElementById('garagePageModalPopup').style.display = 'none'
        document.getElementById('garagePageModalPopup').innerHTML = ''
        document.getElementById('data-launch-save-close-garage-record').style.display = 'block'
    }
    openMotCalibrationForm (motcalid, vtsid) {
        let record;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].vtsId === vtsid) {
                for (let p = 0; p < this.data[i].motCalibration.length; p++) {
                    if (this.data[i].motCalibration[p].id === motcalid) {
                        record = this.data[i].motCalibration[p]
                        document.getElementById('garagePageMain').backgroundColor = 'lightgrey'
                        let html = ''
                        html += `
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Garage Name</label>
                            <input placeholder='Garage Name' type='text' data-launch-field="garageName" value="${record.garageName}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Equipment Type</label>
                            <input placeholder='Equipment Type' type='text' data-launch-field="equipmentType" value="${record.equipmentType}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Make</label>
                            <input placeholder='Make' type='text' data-launch-field="make" value="${record.make}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Model</label>
                            <input placeholder='Model' type='text' data-launch-field="model" value="${record.model}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Serial No</label>
                            <input placeholder='serialNo' type='text' data-launch-field="serialNo" value="${record.serialNo}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Last Calibration Date</label>
                            <input placeholder='lastCalibrationDate' type='text' data-launch-field="lastCalibrationDate" value="${record.lastCalibrationDate}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Next Calibration Date</label>
                            <input placeholder='nextCalibrationDate' type='text' data-launch-field="nextCalibrationDate" value="${record.nextCalibrationDate}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Bays</label>
                            <input placeholder='bays' type='text' data-launch-field="bays" value="${record.bays}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container'>
                            <label class="data-launch-field-labels">Bays</label>
                            <input placeholder='bays' type='text' data-launch-field="bays" value="${record.bays}" class='data-launch-input-field'>
                        </div>
                        <div class='data-launch-input-field-container data-launch-input-field-container-multi-line'>
                            <label class="data-launch-field-labels">Notes</label>
                            <textarea class='data-launch-input-field-multi-line' data-launch-field="Notes" >${typeof record.notes !== undefined ? record.notes : ''}</textarea>
                        </div>
                        <button class='data-launch-modal-close-window btn btn-block btn-success'>Close</button>
                        `
                        document.getElementById('garagePageModalPopup').style.display = 'block'
                        document.getElementById('data-launch-save-close-garage-record').style.display = 'none'                        
                        document.getElementById('garagePageModalPopup').innerHTML = html
                    }
                }  
            }                     
        }
    }
    injectDataIntoAssociatedTestersSubgrid () {
        fetchData('tester_garages', 100).then(res => {
                console.log('the tester garages data is as such', res)
                let reducedArrayForGarageRecordID = []
                for (let i = 0; i < res.length; i++) {
                    if (res[i]["garage_id"] === parseInt(this.id)) {
                        reducedArrayForGarageRecordID.push(res[i])
                    }                    
                }
                console.log('reducedArrayForGarageRecordID', reducedArrayForGarageRecordID)
                let data = []
                for (let i = 0; i < reducedArrayForGarageRecordID.length; i++) {
                    for (let t = 0; t < testersData.length; t++) {
                        if (reducedArrayForGarageRecordID[i]["tester_id"] === testersData[t].id) {
                            data.push({name: `${testersData[t].first_name} ${testersData[t].last_name}`, id: testersData[t].id, tester_garages_id: reducedArrayForGarageRecordID[i].id})
                        }                        
                    }
                }        
                new SubGrid(data, 'data-launch-garage-associated-testers-cont', 'garage_testers');
            },
            err => {
                console.error(err);
            }
        );   
    }
    injectDataIntoMotCalibrationSubgrid () {        
        fetchData('data_launch_mot_calibration', 100, 0, null, this.id).then(data => {
            console.log('Data for garage_id 5:', data);
            this.motCalibrationData = data
            new SubGrid(data, 'data-launch-garage-mot-calibration-cont', 'motcalibration', this.id);
        });
    }
    injectDataIntoMotSiteAuditsSubgrid () {
        fetchData('data_launch_mot_site_audits', 100, 0, null, this.id).then(data => {
            console.log(`Data for garage_id: ${this.id} `, data);
            this.motSiteAuditData = data
            new SubGrid(data, 'data-launch-garage-mot-site-audits-cont', 'motsiteaudits',  this.id);            
        });
    }
    injectDataIntoQcCheckersSubgrid () {
        fetchData('data_launch_qc_checkers_for_car', 100, 0, null, this.id).then(data => {
            console.log(`data_launch_qc_checkers_for_car for garage_id: ${this.id} `, data);
            this.qcCheckerData = data
            new SubGrid(data, 'data-launch-garage-qc-checkers-cont', 'qccheckers',  this.id);            
        });
    }
    injectDataIntoGarageBookingsSubgrid () {
        fetchData('data_launch_garage_bookings', 100, 0, null, this.id).then(data => {
            console.log(`data_launch_garage_bookings for garage_id: ${this.id} `, data);
            this.garageBookingsData = data
            new SubGrid(data, 'data-launch-garage-bookings-cont', 'garageBookings',  this.id);            
        });
    }
    injectDataIntoMotEquipmentSubgrid() {
        this.motEquipmentData = []
        fetchData('data_launch_mot_equipment', 100, 0, null, this.id).then(res => {
            console.log('the data_launch_mot_equipment data is as such', res)
            // let reducedArrayForGarageRecordID = []
            // for (let i = 0; i < res.length; i++) {
            //     if (res[i]["garage_id"] === parseInt(this.id)) {
            //         reducedArrayForGarageRecordID.push(res[i])
            //     }                    
            // }
            // console.log('reducedArrayForGarageRecordID', reducedArrayForGarageRecordID)
            // let data = []
            // for (let i = 0; i < reducedArrayForGarageRecordID.length; i++) {
            //     data.push({
            //             name: `${reducedArrayForGarageRecordID[i].equipment_type}`,
            //             id: reducedArrayForGarageRecordID[i].id,
            //             make: reducedArrayForGarageRecordID[i].make,
            //             model: reducedArrayForGarageRecordID[i].model,
            //             serial_no: reducedArrayForGarageRecordID[i].serial_no,
            //             bay: reducedArrayForGarageRecordID[i].bay                    
            //         })                         
            // }
            this.motEquipmentData = res
            new SubGrid(res, 'data-launch-garage-mot-equipment-cont', 'garage_mot_equipment', this.id);
        },
        err => {
            console.error(err);
        }
    );
    }
    injectDataIntoDefectReportsSubgrid () {
        fetchData('data_launch_defect_reports', 100, 0, null, this.id).then(data => {
            console.log(`data_launch_defect_reports for garage_id: ${this.id} `, data);
            this.defectReportData = data
            new SubGrid(data, 'data-launch-defect-reports-subgrid-cont', 'defectReports',  this.id);            
        });
    }
    injectDataIntoMotBayCleaningLogSubgrid () {
        fetchData('data_launch_mot_bay_cleaning_log', 100, 0, null, this.id).then(data => {
            console.log(`data_launch_mot_bay_cleaning_log for garage_id: ${this.id} `, data);
            this.motBayCleaningLogData = data
            new SubGrid(data, 'data-launch-mot-bay-cleaning-subgrid-cont', 'motBayCleaningLog',  this.id);            
        });
    }
    injectDataIntoQcCheckersForBikesSubgrid () {
        fetchData('data_launch_qc_checkers_for_bike', 100, 0, null, this.id).then(data => {
            console.log(`data_launch_qc_checkers_for_bike for garage_id: ${this.id} `, data);
            this.qcCheckersForBikeData = data
            new SubGrid(data, 'data-launch-qc-checkers-for-bikes-subgrid-cont', 'qcCheckersForBike',  this.id);            
        });
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
    cartqi () {
        this.cartqiID = 'data-launch-garages-cartqi'
        this.dataCarTQI = []
        this.renderHTMLHeaderCarTQI()
    }
    renderHTMLHeaderCarTQI () {
        this.htmlHeaderCarTQI = `
        <div class='data-launch-modal-popup' id='cartqiPageModalPopup' style='display: none'></div>
        <div class='data-launch-screen-overlay' style='display:none' id='cartqiPageScreenOverlay'></div>
        <div class="row">
            <h3 class='data-launch-sub-page-header'>Car TQI</h3>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <button class="btn btn-primary data-launch-upload-car-tqi-file data-launch-list-button-headers">Upload Car TQI File</button>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <button class="btn btn-primary data-launch-export-records-button data-launch-list-button-headers">Export to CSV</button>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <button class="btn btn-primary data-launch-table-reset-all-filters-button data-launch-list-button-headers">Reset All Filters</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 data-launch-table-container">
                <table class="table table-hover data-launch-table-clickable-row">
                    <thead class="sticky-header">
                        <tr>
                            <th scope="col">
                                <span>Created On</span>
                                <div>
                                    <input type="text" class="data-launch-filter-search" data-launch-field="createdOn" data-launch-header="createdOn" style="width: 100%;" placeholder="" value="">
                                </div>
                            </th>
                            <th scope="col">                           
                                <span>Month</span>
                                <div>
                                    <input type="text" class="data-launch-filter-search" data-launch-field="month" data-launch-header="month" style="width: 100%;" placeholder="" value="">
                                </div>
                            </th>
                            <th scope="col">
                                <span>Year</span>
                                <div>
                                    <input type="email" class="data-launch-filter-search" data-launch-field="year" data-launch-header="year" style="width: 100%;" placeholder="" value="">
                                </div>
                            </th>
                            <th scope="col">                           
                                <span>Class</span>
                                <div>
                                    <input type="text" class="data-launch-filter-search" data-launch-field="class" data-launch-header="class" style="width: 100%;" placeholder="" value="">
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody id='data-launch-mot-equipment-table-body'>`
        this.renderHTMLDataCarTQI(this.htmlHeaderCarTQI)    
    }
    renderHTMLDataCarTQI(html) {
        let data = this.dataCarTQI
        let exportRow = 0
        for (let i = 0; i < data.length; i++) {
            html += `
            <tr class="export-record export-row" data-export-row="${exportRow}" data-export-header="VTS Pro ID"                 data-export-val="${data[i].vtsID}" data-vts-pro-id=${data[i].vtsId}>
                <td class="export-record data-launch-car-tqi-list-view-record-click" data-launch-row-no='${i}' data-launch-vts-id="${data[i].vtsID}"  id="data-launch-mot-equipment-${i}-created-on"    data-export-row="${exportRow}" data-export-header="Created On"     data-export-val="${data[i].createdOn}" scope="row">${data[i].createdOn}</td>
                <td class="export-record data-launch-car-tqi-list-view-record-click" data-launch-row-no='${i}' data-launch-vts-id="${data[i].vtsID}"  id="data-launch-mot-equipment-${i}-month"              data-export-row="${exportRow}" data-export-header="Month"               data-export-val="${data[i].month}">${data[i].month}</td>
                <td class="export-record data-launch-car-tqi-list-view-record-click" data-launch-row-no='${i}' data-launch-vts-id="${data[i].vtsID}"  id="data-launch-mot-equipment-${i}-year"             data-export-row="${exportRow}" data-export-header="Year"              data-export-val="${data[i].year}">${data[i].year}</td>
                <td class="export-record data-launch-car-tqi-list-view-record-click" data-launch-row-no='${i}' data-launch-vts-id="${data[i].vtsID}"  id="data-launch-mot-equipment-${i}-class"         data-export-row="${exportRow}" data-export-header="Class"          data-export-val="${data[i].class}">${data[i].class}</td>
            </tr>` 
            exportRow++           
        }
        this.renderHTMLBodyCarTQI(html)
    }
    renderHTMLBodyCarTQI (html) {
        html += `       </tbody>
                    </table>
                </div>
            </div>`
        document.getElementById(this.cartqiID).innerHTML = html
    }
    injectTableBodyDataCarTQI (data) {
        let html = ''
        let exportRow = 0
        if (data.length === 0) {
            html += `<div><h1>Sorry, no records to display</h1></div>`
        }
        else {
            if (this.filters.length === 0) {
                data = this.dataCarTQI
            }
            for (let i = 0; i < data.length; i++) {
                html += `
                <tr class="export-record export-row" data-export-row="${exportRow}" data-export-header="VTS Pro ID"                 data-export-val="${data[i].vtsId}" data-vts-pro-id=${data[i].vtsId}>
                    <td class="export-record data-launch-car-tqi-list-view-record-click"  data-export-row="${exportRow}" data-launch-row-no='${i}'  id="data-launch-mot-equipment-${i}-created-on" data-export-header="Created On" data-export-val="${data[i].createdOn}" scope="row">${data[i].createdOn}</td>
                    <td class="export-record data-launch-car-tqi-list-view-record-click"  data-export-row="${exportRow}" data-launch-row-no='${i}'  id="data-launch-mot-equipment-${i}-month" data-export-header="Month"               data-export-val="${data[i].month}">${data[i].month}</td>
                    <td class="export-record data-launch-car-tqi-list-view-record-click"  data-export-row="${exportRow}" data-launch-row-no='${i}'  id="data-launch-mot-equipment-${i}-year" data-export-header="Year"            data-export-val="${data[i].year}">${data[i].year}</td>
                    <td class="export-record data-launch-car-tqi-list-view-record-click"  data-export-row="${exportRow}" data-launch-row-no='${i}'  id="data-launch-mot-equipment-${i}-class" data-export-header="Class"              data-export-val="${data[i].class}">${data[i].class}</td>
                </tr>` 
                exportRow++           
            }
        }        
        return html
    }
    openModal (importData) {
        let html = `
        <table class='table table-striped'>
            <thead>
                <tr>
                    <th>Tester Name</th>
                    <th>Tester ID</th>
                    <th>Test Done</th>
                    <th>Average Vehicle Age</th>
                    <th>Average Test Time</th>
                    <th>Tests Failed</th>
                    <th>Body, chassis, structure</th>
                    <th>Brakes</th>
                    <th>Buses and coaches supplementary tests</th>
                    <th>Identification of the vehicle</th>
                    <th>Lamps, reflectors and electrical equipment</th>
                    <th>Noise, emissions and leaks</th>
                    <th>Road Wheels</th>
                    <th>Seat belt installation check</th>
                    <th>Seat belts and supplementary restraint systems</th>
                    <th>Speedometer and speed limiter</th>
                    <th>Steering</th>
                    <th>Suspension</th>
                    <th>Tyres</th>
                    <th>Visibility</th>
                </tr>
            </thead>
            <tbody>`
       
            const testerNames = importData[5];
            const userIds = importData[6];
            const initialTestPerformanceHeaders = importData.slice(8, 12);
            const failuresByCategoryHeaders = importData.slice(13, 27);
    
            Object.keys(testerNames).forEach((key) => {
                if (key === 'A' || key === '__rowNum__') return;
    
                html += `<tr>`;
                html += `<td>${testerNames[key]}</td>`;
                html += `<td>${userIds[key]}</td>`;
    
                initialTestPerformanceHeaders.forEach(header => {
                    html += `<td>${header[key] || ''}</td>`;
                });
    
                failuresByCategoryHeaders.forEach(header => {
                    html += `<td>${header[key] || ''}</td>`;
                });
    
                html += `</tr>`;
            });
    
            html += `</tbody></table>`;


        html += `
        <button class='btn btn-block btn-success data-launch-car-tqi-modal-close'>Close</button>
        `
        document.getElementById('cartqiPageModalPopup').style.display = 'block'
        document.getElementById('data-launch-save-close-garage-record').style.display = 'none'                       
        document.getElementById('cartqiPageModalPopup').innerHTML = html
    }
    uploadFile () {
        console.log('hitting the upload file section in carTqi.js')
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
          // you can use this method to get file and perform respective operations
                  let files =   Array.from(input.files);
                  var xl2json = this.ExcelToJSON();
                  this.parseExcel(files[0]);              
              };
        input.click();
    }
    parseExcel (file) {
        var reader = new FileReader();
        reader.onload = (e) => {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary',
                raw: true // Read the data as raw values to prevent automatic date conversion
            });
            workbook.SheetNames.forEach(sheetName => {
                var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: "A", raw: true });
                // console.log('XL_row_object.length', XL_row_object.length);
                // No date parsing needed, keep values as they are
                this.tqiImportData = XL_row_object.map(row => {
                    return row; // Keep the values as strings
                });
                // console.log('this.tqiImportData data is', this.tqiImportData);
                this.dataCarTQI.push({
                    createdOn: new Date(),
                    month: this.extractMonths(this.tqiImportData[2].A),
                    year: this.extractYear(this.tqiImportData[2].A),
                    class: this.tqiImportData[4].A,
                    rawData: this.tqiImportData,
                    vtsID: this.tqiImportData[1].A
                });
                this.renderHTMLDataCarTQI(this.htmlHeaderCarTQI)
                // this.openModal(this.tqiImportData)
            });
        }
        reader.onerror = function(ex) {
          console.log(ex);
        };
        reader.readAsBinaryString(file);
    }
    extractYear(value) {
        if (value.includes('to')) {
            return value.split(' to ')[0].substring(4, 6);
        } else {
            return value.substring(4, 6);
        }
    }
    extractMonths(value) {
        if (value.includes('to')) {
            const parts = value.split(' to ');
            const startMonth = parts[0].substring(0, 3);
            const endMonth = parts[1].substring(0, 3);
            return `${startMonth}-${endMonth}`;
        } else {
            return value.substring(0, 3);
        }
    }
    ExcelToJSON () {        
        var objMyObject = function(row) {
          this.colA = row.A;
          this.colB = row.B;
          this.colC = row.C;
          this.colD = row.D;
          this.colE = row.E;
          this.colF = row.F;
          this.colG = row.G;
        };
    };
    importCarTQI () {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
          // you can use this method to get file and perform respective operations
                  let files =   Array.from(input.files);
                  var xl2json = this.ExcelToJSON();
                  this.parseExcel(files[0]);              
              };
        input.click();
    }

    fieldObjectMeta () {
        return {
            Summary : {
                meta: {
                    columns: 3,
                    name: 'summary',
                    type: 'split'
                },
                fields: [
                    {
                        field: 'vts_site_number',
                        label: 'VTS Site No',
                        type: 'text',
                        column: 1,
                        section: 1
                    },
                    {
                        field: 'trading_name',
                        label: 'Trading Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'contact_forename',
                        label: 'First Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'contact_surname',
                        label: 'Last Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'contact_main_number',
                        label: 'Main Phone',
                        type: 'phone',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'contact_mobile_number',
                        label: 'Mobile Phone',
                        type: 'phone',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'contact_email',
                        label: 'Email',
                        type: 'email',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'date_called',
                        label: 'Date Called',
                        type: 'date',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'call_back_needed',
                        label: 'Call back needed',
                        type: 'checkbox',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'callback_date',
                        label: 'Callback Date',
                        type: 'date',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'testing_station_id',
                        label: 'Testing Station Record',
                        type: 'record',
                        section: 1,
                        column: 2
                    },
                    {
                        field: [
                            {name: 'Address1', fieldName: 'vts_address_line_1'},
                            {name: 'Address2', fieldName :'vts_address_line_2'},
                            {name: 'Address3', fieldName: 'vts_address_line_3'},
                            {name: 'City',     fieldName: 'vts_address_line_4'},
                            {name: 'Postcode', fieldName: 'vts_postcode'}],
                        label: 'Address',
                        type: 'googleMaps',
                        section: 1,
                        column: 3
                    }
                ]
            },
            "Garage Details": {
                meta: {
                    columns: 2,
                    name: 'garage-details',
                    type: 'split'
                },
                fields: [
                    {
                        field: 'opening_hours_start',
                        label: 'Opening Hours Start',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'opening_hours_end',
                        label: 'Opening Hours End',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'charge_rate',
                        label: 'Charge Rate',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'consultant_name',
                        label: 'Consultant Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'lead_consultant_name',
                        label: 'Lead Consultant Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'sms_functionality',
                        label: 'SMS Functionality',
                        type: 'checkbox',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'sms_cap',
                        label: 'SMS Cap',
                        type: 'text',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'is_parent_garage',
                        label: 'Is Parent Garage',
                        type: 'checkbox',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'package_required',
                        label: 'Package Required',
                        type: 'text',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'payment_type',
                        label: 'Payment Type',
                        type: 'text',
                        section: 1,
                        column: 2
                    },
                ]
            },
            "Credentials": {
                meta: {
                    columns: 1,
                    name: 'credentials',
                    type: 'split'
                },
                fields: [
                    {
                        field: 'email_username',
                        label: 'Email Username',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'email_password',
                        label: 'Email Password',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                ]
            },
            "Invoice Contact": {
                meta:  {
                    columns: 2,
                    name: 'invoice-contact'
                },
                fields: [
                    {
                        field: 'invoice_contact',
                        label: 'Invoice Contact',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'invoice_contact_number',
                        label: 'Invoice Contact No',
                        type: 'phone',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'invoice_contact_email',
                        label: 'Invoice Contact Email',
                        type: 'email',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'invoice_contact_notes',
                        label: 'Invoice Contact Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'callback_notes',
                        label: 'Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'cpd_needed',
                        label: 'CPD Needed',
                        type: 'checkbox',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'cpd_notes',
                        label: 'CPD Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'level_3_required_checkb',
                        label: 'Level 3 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'level_3_required',
                        label: 'Level 3 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    }
                ]
            },
            Address: {
                meta: {
                    columns: 1,
                    name: 'address',
                    type: 'split'
                },
                fields: [
                    {
                        field: 'vts_address_line_1',
                        label: 'Address 1',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_address_line_2',
                        label: 'Address 2',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_address_line_3',
                        label: 'Address 3',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_address_line_4',
                        label: 'City',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_postcode',
                        label: 'Postcode',
                        type: 'text',
                        section: 1,
                        column: 1
                    }
                ]
            },
            AEDM: {
                meta: {
                    columns: 1,
                    name: 'aedm',
                    type: 'split'
                },
                fields: [
                    {
                        field: 'aed_name',
                        label: 'AEDM Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'aed_password',
                        label: 'AEDM Password',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'aed_email',
                        label: 'AEDM Email',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'aed_phone_no',
                        label: 'AEDM Phone No',
                        type: 'text',
                        section: 1,
                        column: 1
                    }
                ]
            },
            "Testing Classes": {
                meta: {
                    columns: 3,
                    name: 'testing-classes',
                    type: 'split'
                },
                fields: [
                    {
                        field: 'mot_testing_class_4_7_req_checkb',
                        label: 'MOT Testing Class 4 & 7 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_testing_class_4_7_required',
                        label: 'MOT Testing Class 4 & 7 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_testing_class_1_2_req_checkb',
                        label: 'MOT Testing Class 1 & 2 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_testing_class_1_2_required',
                        label: 'MOT Testing Class 1 & 2 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_class_3_required_checkb',
                        label: 'MOT Testing Class 3 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_class_3_required',
                        label: 'MOT Testing Class 3 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_class_5_required_checkb',
                        label: 'MOT Testing Class 5 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_class_5_required',
                        label: 'MOT Testing Class 5 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 3
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_test_centre_management_req_checkb',
                        label: 'MOT Test Centre Management Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_test_centre_management_required',
                        label: 'MOT Test Centre Management Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 3
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_pro_solution_required_checkb',
                        label: 'VTS Pro Solution Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_pro_solution_required',
                        label: 'VTS Pro Solution Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 3
                    }
                ]
            },
            Testers: {
                meta: {
                    columns: 1,
                    name: 'testers',
                    type: 'full'
                },
                fields: [
                    {
                        type: 'garagetesterssubgrid',
                        column: 1
                    }
                ]
            },
            "Mot Equipment": {
                meta: {
                    columns: 1,
                    name: 'mot-equipment',
                    type: 'full'
                },
                fields: [
                    {
                        type: 'garageMotEquipmentSubgrid',
                        column: 1
                    }
                ]
            },
            "MOT Calibrations": {
                meta:  {
                    columns: 1,
                    name: 'mot-calibration',
                    type: 'full'
                },
                fields: [
                    {
                        type: 'garageMotCalibrationSubgrid',
                        column: 1
                    }
                ]
            },
            "MOT Site Audits": {
                meta:  {
                    columns: 1,
                    name: 'mot-site-audits',
                    type: 'full'
                },
                fields: [
                    {
                        type: 'motSiteAuditsSubgrid',
                        column: 1
                    }
                ]
            },
            "QC Checkers": {
                meta:  {
                    columns: 1,
                    name: 'qc-checkers',
                    type: 'full'
                },
                fields: [
                    {
                        type: 'qcCheckersSubgrid',
                        column: 1
                    }
                ]
            },
            "Bookings": {
                meta: {
                    columns: 1,
                    name: 'bookings',
                    type: 'full'
                },
                fields : [
                    {
                        type: 'bookings',
                        column: 1
                    }
                ]
            },
            "Defect Reports": {
                meta: {
                    columns: 1,
                    name: 'Defect Reports',
                    type: 'full'
                },
                fields: [
                    {
                        type: 'defectReports',
                        column: 1
                    }
                ]
            },
            "MOT Bay Cleaning": {
                meta: {
                    columns : 1,
                    name: 'MOT Bay Cleaning',
                    type: 'full'
                },
                fields: [
                    {
                        type: 'motBayCleaning',
                        column: 1
                    }
                ]
            },
            "QC Checkers for Bikes" : {
                meta: {
                    columns: 1,
                    name: 'QC Checkers for Bike',
                    type: 'full'
                },
                fields: [
                    {
                        type: 'qcCheckersForBikes',
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
                html += `<li class="nav-item data-launch-tabs-parent-li-testing-station data-launch-tabs-parent-li-garages modern-nav-item active" id="garages_parent_li_${headers[key].meta.name}">
                            <a class="nav-link data-launch-tabs-clickable-garages modern-nav-link active" data-launch-menu-item="${headers[key].meta.name}" href="#">${key}</a>
                        </li>` 
                fistIteration = false
            }
            else {
            html +=     `<li class="nav-item data-launch-tabs-parent-li-testing-station data-launch-tabs-parent-li-garages modern-nav-item" id="garages_parent_li_${headers[key].meta.name}">
                            <a class="nav-link data-launch-tabs-clickable-garages modern-nav-link" data-launch-menu-item="${headers[key].meta.name}" href="#">${key}</a>
                        </li>`   
            }                   
        }
        return html
    }
    buildFormSections (rec, html) {
        let fieldDataObj = this.fieldObjectMeta()        
        let firstIteration = true
        console.log('rec is ', rec)
        if (rec !== 'NEW FORM') {
            for (const key in fieldDataObj) {
                if (firstIteration) {
                    html += `<div class='data-launch-garages-screen row active' id='data-launch-garages-${fieldDataObj[key].meta.name}'>`
                    firstIteration = false
                }
                else {
                    html += `<div class='data-launch-garages-screen row' id='data-launch-garages-${fieldDataObj[key].meta.name}'>`
                }
                let columns = fieldDataObj[key].meta.columns
                let colIndex = 0
                for (let i = 0; i < columns; i++) {
                    if (fieldDataObj[key].meta.type === 'full') {
                        html += `<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    }
                    else {
                        html += `<div class='col-lg-4 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    }                    
                    colIndex = i + 1
                    for (let t = 0; t < fieldDataObj[key].fields.length; t++) {
                        if (fieldDataObj[key].fields[t].column === colIndex) {
                            if (fieldDataObj[key].fields[t].type === 'text') {
                                html += `<div class='data-launch-input-field-container'>
                                          <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                          <input id="${fieldDataObj[key].fields[t].field}_val" placeholder="${fieldDataObj[key].fields[t].label}" type='text' data-launch-field="${fieldDataObj[key].fields[t].field}" value="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'spacer') {
                                html += `<div style='height: 20px' class='data-launch-empty-spacer'></div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'phone') {
                                html += `<div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='phone' value="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'email') {
                                html += ` <div class='data-launch-input-field-container'>
                                             <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                             <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='email' value="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                            <a style='position: relative; top: -34%; left: 95%;' href="mailto:${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}"><i class="bi bi-envelope"></i></a>
                                          </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'date') {
                                html += ` <div class='data-launch-input-field-container'>
                                             <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                             <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='date' value="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                           </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'multi-text') {
                                html += `<div class='data-launch-input-field-container data-launch-input-field-container-multi-line'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <textarea id="${fieldDataObj[key].fields[t].field}_val" class='data-launch-input-field-multi-line data-launch-field-editable' data-launch-field="${fieldDataObj[key].fields[t].field}" data-launch-field-editable">${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' :  rec[fieldDataObj[key].fields[t].field]}</textarea>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'checkbox') {
                                html += ` <div class='data-launch-input-field-container-checkbox'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" type='checkbox' class='data-launch-input-field-checkbox data-launch-field-editable' data-launch-field="${fieldDataObj[key].fields[t].field}" checked="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}">
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'record') {
                                console.log('rec[fieldDataObj[key].fields[t].field]', rec[fieldDataObj[key].fields[t].field])
                                html += `<div class='data-launch-input-field-container'>
                                          <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>`
                                if (rec[fieldDataObj[key].fields[t].field] === null || rec[fieldDataObj[key].fields[t].field] === 0) {
                                    html += `<button type="button" id="data-launch-promote-to-garage" class="btn btn-outline-primary data-launch-promote-to-garage" data-launch-rec="${rec.id}">Promote to Garage Record</button>
                                            <text style='cursor: pointer; display: none; color: blue; font-weight: bold;' class='data-launch-garage-record-click data-launch-change-page' data-launch-menu-item="garage" id="garageRecordId" data-launch-id=''></text>
                                    `
                                }
                                else {
                                    html += `<text style='cursor: pointer; color: blue; font-weight: bold;' class='data-launch-garage-record-click data-launch-change-page' data-launch-menu-item="garage" id="garageRecordId" data-launch-id='${rec[fieldDataObj[key].fields[t].field]}'>Testing Station Record - ${rec[fieldDataObj[key].fields[t].field]}</text>`
                                }
                                html += `</div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'garagetesterssubgrid') {
                                html += `<div id='data-launch-garage-associated-testers-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'></div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'garageMotEquipmentSubgrid') {
                                html += `<div id='data-launch-garage-mot-equipment-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'>
                                         </div>
                                         <button class="data-launch-create-new-mot-equipment-record" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New MOT Equipment Record
                                        </button>
                                         `
                            }
                            else if (fieldDataObj[key].fields[t].type === 'garageMotCalibrationSubgrid') {
                                html += `<div id='data-launch-garage-mot-calibration-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'>
                                         </div>
                                         <button class="data-launch-create-new-mot-calibration-record" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New MOT Calibration Record
                                        </button>
                                         `
                            }
                            else if (fieldDataObj[key].fields[t].type === 'motSiteAuditsSubgrid') {
                                html += `<div id='data-launch-garage-mot-site-audits-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'>
                                         </div>
                                         <button class="data-launch-create-new-mot-site-audit-record" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New MOT Site Audit Record
                                        </button>
                                         `
                            }
                            else if (fieldDataObj[key].fields[t].type === 'qcCheckersSubgrid') {
                                html += `<div id='data-launch-garage-qc-checkers-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'>
                                         </div>
                                         <button class="data-launch-create-new-qc-checkers-record" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New QC Checkers Record
                                        </button>
                                         `
                            }
                            else if (fieldDataObj[key].fields[t].type === 'bookings') {
                                html += `<div id='data-launch-garage-bookings-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'>
                                         </div>
                                         <button class="data-launch-create-new-booking-record" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New Booking Record
                                        </button>
                                         `
                            }
                            else if (fieldDataObj[key].fields[t].type === 'defectReports') {
                                html += `<div id='data-launch-defect-reports-subgrid-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'>
                                         </div>
                                         <button class="data-launch-create-new-defect-report-record" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New Defect Report
                                        </button>
                                         `
                            }
                            else if (fieldDataObj[key].fields[t].type === 'motBayCleaning') {
                                html += `<div id='data-launch-mot-bay-cleaning-subgrid-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'>
                                         </div>
                                         <button class="data-launch-create-new-mot-bay-cleaning-record" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New MOT Bay Cleaning Record
                                        </button>
                                         `
                            }
                            else if (fieldDataObj[key].fields[t].type === 'qcCheckersForBikes') {
                                html += `<div id='data-launch-qc-checkers-for-bikes-subgrid-cont' class='data-launch-subgrid-container data-launch-input-field-container-multi-line'>
                                         </div>
                                         <button class="data-launch-create-new-qc-checkers-for-bikes-record" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New QC Check for Bikes
                                        </button>
                                         `
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
                                        html += `<td>${row[field]}</td>`
                                    })
                                    html += `</tr>`
                                })
                                html += `</tbody>
                                    </table>`
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
                    html += `<div class='data-launch-garages-screen row active' id='data-launch-garages-${fieldDataObj[key].meta.name}'>`
                    firstIteration = false
                }
                else {
                    html += `<div class='data-launch-garages-screen row' id='data-launch-garages-${fieldDataObj[key].meta.name}'>`
                }
                let columns = fieldDataObj[key].meta.columns
                let colIndex = 0
                for (let i = 0; i < columns; i++) {
                    html += `<div class='col-lg-4 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    colIndex = i + 1
                    for (let t = 0; t < fieldDataObj[key].fields.length; t++) {
                        if (fieldDataObj[key].fields[t].column === colIndex) {
                            if (fieldDataObj[key].fields[t].type === 'text') {
                                html += `<div class='data-launch-input-field-container'>
                                          <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                          <input id="${fieldDataObj[key].fields[t].field}_val" placeholder="${fieldDataObj[key].fields[t].label}" type='text' data-launch-field="${fieldDataObj[key].fields[t].field}" value="" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'spacer') {
                                html += `<div style='height: 20px' class='data-launch-empty-spacer'></div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'phone') {
                                html += `<div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='phone' value="" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'email') {
                                html += ` <div class='data-launch-input-field-container'>
                                             <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                             <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='email' value="" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                          </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'date') {
                                html += ` <div class='data-launch-input-field-container'>
                                             <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                             <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='date' value="" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                           </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'multi-text') {
                                html += `<div class='data-launch-input-field-container data-launch-input-field-container-multi-line'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <textarea  id="${fieldDataObj[key].fields[t].field}_val" class='data-launch-input-field-multi-line data-launch-field-editable' data-launch-field="${fieldDataObj[key].fields[t].field}" data-launch-field-editable"></textarea>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'checkbox') {
                                html += ` <div class='data-launch-input-field-container-checkbox'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" type='checkbox' class='data-launch-input-field-checkbox data-launch-field-editable' data-launch-field="${fieldDataObj[key].fields[t].field}" checked="">
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'record') {
                                html += `<div class='data-launch-input-field-container'>
                                          <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>`
                                html += `</div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'subgrid') {
                                html += `<table class="table table-hover data-launch-table-clickable-row"></table>`
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

    openForm = (bool, rec) => {
        currentPage = 'Garages'
        let html = ''
        document.getElementById('data-launch-side-bar').classList.remove('data-launch-activate-menu')
        if (rec) {
            this.newRecord = false
            this.recordId = rec.id
            this.id = rec.id      
            html = `
            <div class='container-fluid'>
                            <div class='row'>
                                <span id='data-launch-simple-image-upload-close-button-garages' class='data-launch-simple-image-upload-close-button-garages'><i class="bi bi-x-circle data-launch-simple-image-upload-close-button-garages active"></i></span>
                                <div id="qcCheckerForBikeModal" class="qc-checker-modal-popup">
                                    <div class="qc-checker-modal-content">
                                        <span class="qc-checker-for-bike-close">&times;</span>
                                        <h2>QC Checker for Bike</h2>

                                        <!-- Tab Navigation -->
                                        <div class="tabs">
                                            <button class="tab-button active" onclick="openTab(event, 'SummaryBike', 'qcCheckerForBikeModal')">Summary</button>
                                            <button class="tab-button" onclick="openTab(event, 'PreChecksBike', 'qcCheckerForBikeModal')">Pre Checks</button>
                                            <button class="tab-button" onclick="openTab(event, 'SatOnVehicleBike', 'qcCheckerForBikeModal')">Sat on Vehicle</button>
                                            <button class="tab-button" onclick="openTab(event, 'FrontOfVehicleBike', 'qcCheckerForBikeModal')">Front of Vehicle</button>
                                            <button class="tab-button" onclick="openTab(event, 'FrontOfVehicleRaisedBike', 'qcCheckerForBikeModal')">Front of Vehicle Raised</button>
                                            <button class="tab-button" onclick="openTab(event, 'OffsideOfVehicleBike', 'qcCheckerForBikeModal')">Offside</button>
                                            <button class="tab-button" onclick="openTab(event, 'RearOfVehicleBike', 'qcCheckerForBikeModal')">Rear of Vehicle</button>
                                            <button class="tab-button" onclick="openTab(event, 'NearsideOfVehicleBike', 'qcCheckerForBikeModal')">Nearside</button>
                                            <button class="tab-button" onclick="openTab(event, 'RearOfVehicleRaisedBike', 'qcCheckerForBikeModal')">Rear of Vehicle Raised</button>
                                            <button class="tab-button" onclick="openTab(event, 'BrakePerformanceBike', 'qcCheckerForBikeModal')">Brake Performance</button>
                                            <button class="tab-button" onclick="openTab(event, 'NotesConfirmationBike', 'qcCheckerForBikeModal')">Notes & Confirmation</button>
                                        </div>

                                        <!-- Summary Section -->
                                        <div id="SummaryBike" class="tab-content active">
                                            <label for="testerName">Tester Name:</label>
                                            <input type="text" id="testerName">
                                            
                                            <label for="testerID">Tester ID:</label>
                                            <input type="text" id="testerID">
                                            
                                            <label for="vehicleReg">Vehicle Reg:</label>
                                            <input type="text" id="vehicleReg">
                                            
                                            <label for="dateOfQC_bikes">Date of QC:</label>
                                            <input type="date" id="dateOfQC_bikes">
                                            
                                            <label for="qcCarriedOutBy">QC Carried out by:</label>
                                            <input type="text" id="qcCarriedOutBy">
                                            
                                            <label for="vehicleClass">Vehicle Class:</label>
                                            <input type="text" id="vehicleClass">
                                            
                                            <label for="nameQCChecker">Name QC Checker:</label>
                                            <input type="text" id="nameQCChecker">
                                        </div>

                                        <!-- Pre Checks Section -->
                                        <div id="PreChecksBike" class="tab-content">
                                            <label for="overallConditionOfVehicle">Overall condition of presented vehicle:</label>
                                            <input type="checkbox" id="overallConditionOfVehicle">
                                            
                                            <label for="doesFuelCapOpen">Does the fuel cap open:</label>
                                            <input type="checkbox" id="doesFuelCapOpen">
                                            
                                            <label for="chassisNumberTaken">Chassis number taken directly from presented vehicle:</label>
                                            <input type="checkbox" id="chassisNumberTaken">
                                            
                                            <label for="registrationNumberTaken">Registration number taken directly from presented vehicle:</label>
                                            <input type="checkbox" id="registrationNumberTaken">
                                            
                                            <label for="vehicleCorrectlyRegistered">Presented vehicle correctly registered for test:</label>
                                            <input type="checkbox" id="vehicleCorrectlyRegistered">
                                        </div>

                                        <!-- Sat on Vehicle Section -->
                                        <div id="SatOnVehicleBike" class="tab-content">
                                            <label for="handlebarsChecked">Handlebars Checked:</label>
                                            <input type="checkbox" id="handlebarsChecked">
                                            
                                            <label for="brakeLeversPedalsChecked">Appliable brake levers and/or pedals checked:</label>
                                            <input type="checkbox" id="brakeLeversPedalsChecked">
                                            
                                            <label for="acceleratorChecked">Accelerator checked:</label>
                                            <input type="checkbox" id="acceleratorChecked">
                                            
                                            <label for="clutchLeverChecked">Clutch lever checked:</label>
                                            <input type="checkbox" id="clutchLeverChecked">
                                            
                                            <label for="steeringHeadBearingsChecked">Steering head bearings and locking devices checked:</label>
                                            <input type="checkbox" id="steeringHeadBearingsChecked">
                                            
                                            <label for="hornOperationChecked">Operation of horn checked:</label>
                                            <input type="checkbox" id="hornOperationChecked">
                                            
                                            <label for="frontSuspensionBounceChecked">Bounce check carried out on front suspension:</label>
                                            <input type="checkbox" id="frontSuspensionBounceChecked">
                                            
                                            <label for="rearSuspensionBounceChecked">Bounce check carried out on rear suspension:</label>
                                            <input type="checkbox" id="rearSuspensionBounceChecked">
                                        </div>

                                        <!-- Front of Vehicle Section -->
                                        <div id="FrontOfVehicleBike" class="tab-content">
                                            <label for="frontPositionLampsCondition">Condition of front position lamps checked:</label>
                                            <input type="checkbox" id="frontPositionLampsCondition">
                                            
                                            <label for="lampHousingUnitsCondition">Condition of lamp housing units checked:</label>
                                            <input type="checkbox" id="lampHousingUnitsCondition">
                                            
                                            <label for="frontDirectionLampsCondition">Condition of front direction lamps checked:</label>
                                            <input type="checkbox" id="frontDirectionLampsCondition">
                                            
                                            <label for="frontSuspensionComponentsCondition">Condition of front suspension components checked:</label>
                                            <input type="checkbox" id="frontSuspensionComponentsCondition">
                                            
                                            <label for="brakeMasterCylinderCondition">Condition of brake master cylinder and reservoir checked:</label>
                                            <input type="checkbox" id="brakeMasterCylinderCondition">
                                            
                                            <label for="fairingsBodyPanelsCondition">Condition of fairings and body panels checked:</label>
                                            <input type="checkbox" id="fairingsBodyPanelsCondition">
                                        </div>

                                        <!-- Front of Vehicle Raised Section -->
                                        <div id="FrontOfVehicleRaisedBike" class="tab-content">
                                            <label for="steeringCondition">Condition of steering checked:</label>
                                            <input type="checkbox" id="steeringCondition">
                                            
                                            <label for="suspensionComponentsCondition">Condition of suspension components checked:</label>
                                            <input type="checkbox" id="suspensionComponentsCondition">
                                            
                                            <label for="wheelsCondition">Condition of wheels checked:</label>
                                            <input type="checkbox" id="wheelsCondition">
                                            
                                            <label for="wheelBearingCondition">Condition of wheel bearing checked:</label>
                                            <input type="checkbox" id="wheelBearingCondition">
                                            
                                            <label for="frontTyreCondition">Condition of front tyre checked:</label>
                                            <input type="checkbox" id="frontTyreCondition">
                                            
                                            <label for="frontBrakeCondition">Condition of front brake checked:</label>
                                            <input type="checkbox" id="frontBrakeCondition">
                                        </div>

                                        <!-- Offside of Vehicle Section -->
                                        <div id="OffsideOfVehicleBike" class="tab-content">
                                            <label for="frameCondition">Condition of frame (including welds) checked:</label>
                                            <input type="checkbox" id="frameCondition">
                                            
                                            <label for="seatingCondition">Condition of seating checked:</label>
                                            <input type="checkbox" id="seatingCondition">
                                            
                                            <label for="footRestCondition">Condition of foot rest checked:</label>
                                            <input type="checkbox" id="footRestCondition">
                                            
                                            <label for="rearSuspensionComponentsConditionOffside">Condition of rear suspension components checked:</label>
                                            <input type="checkbox" id="rearSuspensionComponentsConditionOffside">
                                            
                                            <label for="finalDriveComponentsCondition">Condition of final drive components checked:</label>
                                            <input type="checkbox" id="finalDriveComponentsCondition">
                                            
                                            <label for="exhaustSystemCondition">Condition of exhaust system checked:</label>
                                            <input type="checkbox" id="exhaustSystemCondition">
                                            
                                            <label for="fuelSystemCondition">Condition of fuel system checked:</label>
                                            <input type="checkbox" id="fuelSystemCondition">
                                            
                                            <label for="rearTyreConditionOffside">Condition of rear tyre checked:</label>
                                            <input type="checkbox" id="rearTyreConditionOffside">
                                            
                                            <label for="rearBrakeCondition">Condition of rear brake checked:</label>
                                            <input type="checkbox" id="rearBrakeCondition">
                                        </div>

                                        <!-- Rear of Vehicle Section -->
                                        <div id="RearOfVehicleBike" class="tab-content">
                                            <label for="rearLightsCondition">Condition of rear lights checked:</label>
                                            <input type="checkbox" id="rearLightsCondition">
                                            
                                            <label for="stopLampsCondition">Condition of stop lamps checked:</label>
                                            <input type="checkbox" id="stopLampsCondition">
                                            
                                            <label for="rearDirectionLampsCondition">Condition of rear direction lamps checked:</label>
                                            <input type="checkbox" id="rearDirectionLampsCondition">
                                            
                                            <label for="rearReflectorCondition">Condition of rear reflector checked:</label>
                                            <input type="checkbox" id="rearReflectorCondition">
                                            
                                            <label for="registrationPlateLampsCondition">Condition of registration plate and lamps checked:</label>
                                            <input type="checkbox" id="registrationPlateLampsCondition">
                                            
                                            <label for="wheelAlignmentChecked">Wheel alignment checked:</label>
                                            <input type="checkbox" id="wheelAlignmentChecked">
                                        </div>

                                        <!-- Nearside of Vehicle Section -->
                                        <div id="NearsideOfVehicleBike" class="tab-content">
                                            <label for="nearsideFrameCondition">Condition of frame (including welds) checked:</label>
                                            <input type="checkbox" id="nearsideFrameCondition">
                                            
                                            <label for="nearsideSeatingCondition">Condition of seating checked:</label>
                                            <input type="checkbox" id="nearsideSeatingCondition">
                                            
                                            <label for="nearsideFootRestCondition">Condition of foot rest checked:</label>
                                            <input type="checkbox" id="nearsideFootRestCondition">
                                            
                                            <label for="nearsideRearSuspensionComponentsCondition">Condition of rear suspension components checked:</label>
                                            <input type="checkbox" id="nearsideRearSuspensionComponentsCondition">
                                            
                                            <label for="nearsideFinalDriveComponentsCondition">Condition of final drive components checked:</label>
                                            <input type="checkbox" id="nearsideFinalDriveComponentsCondition">
                                            
                                            <label for="nearsideExhaustSystemCondition">Condition of exhaust system checked:</label>
                                            <input type="checkbox" id="nearsideExhaustSystemCondition">
                                            
                                            <label for="nearsideFuelSystemCondition">Condition of fuel system checked:</label>
                                            <input type="checkbox" id="nearsideFuelSystemCondition">
                                            
                                            <label for="nearsideRearTyreCondition">Condition of rear tyre checked:</label>
                                            <input type="checkbox" id="nearsideRearTyreCondition">
                                            
                                            <label for="nearsideRearBrakeCondition">Condition of rear brake checked:</label>
                                            <input type="checkbox" id="nearsideRearBrakeCondition">
                                        </div>

                                        <!-- Rear of Vehicle Raised Section -->
                                        <div id="RearOfVehicleRaisedBike" class="tab-content">
                                            <label for="rearWheelsCondition">Condition of wheels checked:</label>
                                            <input type="checkbox" id="rearWheelsCondition">
                                            
                                            <label for="rearWheelBearingCondition">Condition of wheel bearing checked:</label>
                                            <input type="checkbox" id="rearWheelBearingCondition">
                                            
                                            <label for="rearSuspensionComponentsCondition">Condition of suspension components checked:</label>
                                            <input type="checkbox" id="rearSuspensionComponentsCondition">
                                            
                                            <label for="rearTyreCondition">Condition of rear tyre checked:</label>
                                            <input type="checkbox" id="rearTyreCondition">
                                        </div>

                                        <!-- Brake Performance Section -->
                                        <div id="BrakePerformanceBike" class="tab-content">
                                            <label for="brakePerformanceChecked">Brake performance checked:</label>
                                            <input type="checkbox" id="brakePerformanceChecked">
                                            
                                            <label for="brakePerformanceResultsRecorded">Brake performance results correctly recorded:</label>
                                            <input type="checkbox" id="brakePerformanceResultsRecorded">
                                        </div>

                                        <!-- Notes & Confirmation Section -->
                                        <div id="NotesConfirmationBike" class="tab-content">
                                            <label for="notes">Notes:</label>
                                            <textarea id="notes"></textarea><br>

                                            <label for="confirmedByTester">Confirmed by Tester:</label>
                                            <input type="checkbox" id="confirmedByTester"><br>

                                            <input type="hidden" id="qcCheckerForBikeRecordId">
                                        </div>

                                        <button class="data-launch-save-qc-checkers-for-bike-btn">Save</button>
                                    </div>
                                </div>






                                <div id="motCalibrationModal" style="display: none;" class="modal mot-calibration-modal-popup">
                                    <div class="modal-content mot-calibration-modal-content">
                                        <span class="mot-calibration-close">&times;</span>
                                        <h2>MOT Calibration</h2>
                                        
                                        <!-- Tab Navigation -->
                                        <div class="tabs">
                                            <button class="tab-button active" onclick="openTab(event, 'MotCalibrationDetailsSection', 'motCalibrationModal')">Details</button>
                                            <button class="tab-button" onclick="openTab(event, 'MotCalibrationNotesSection', 'motCalibrationModal')">Notes</button>
                                        </div>

                                        <!-- Tab Content -->
                                        <div id="MotCalibrationDetailsSection" class="tab-content active">
                                            <label for="mot_equipment_type">Equipment Type:</label>
                                            <input type="text" id="mot_equipment_type"><br>

                                            <label for="mot_make">Make:</label>
                                            <input type="text" id="mot_make"><br>

                                            <label for="mot_model">Model:</label>
                                            <input type="text" id="mot_model"><br>

                                            <label for="mot_serial_no">Serial No.:</label>
                                            <input type="text" id="mot_serial_no"><br>

                                            <label for="garagesMotCalibrationDocumentUpload">Document Upload</label>
                                            <button class='data-launch-upload-garages-mot-calibration-document'>Upload</button>
                                            <table class="table table-hover" id="garageMotCalibrationsDocuments${this.id}">
                                                <thead>
                                                    <tr>
                                                        <th style='width: 30%'>Name</th>
                                                        <th style='width: 30%'>Type</th>
                                                        <th style='width: 30%'>Preview</th>
                                                        <th style='width: 10%'></th>
                                                    </tr>
                                                </thead>
                                                <tbody id="garageMotCalibrationsDocumentsTableBody_${this.id}"></tbody>
                                            </table>

                                            <label for="mot_last_calibration_date">Last Calibration Date:</label>
                                            <input type="date" id="mot_last_calibration_date"><br>

                                            <label for="mot_next_calibration_date">Next Calibration Date:</label>
                                            <input type="date" id="mot_next_calibration_date"><br>
                                        </div>

                                        <div id="MotCalibrationNotesSection" class="tab-content">
                                            <label for="mot_notes">Notes:</label>
                                            <textarea id="mot_notes"></textarea><br>
                                        </div>

                                        <div id="MotCalibrationImagesSection" class="tab-content">
                                            <div id="mot_image_container" style="display: none;">
                                                <!-- Images would be dynamically inserted here -->
                                            </div>
                                        </div>
                                        
                                        <span style="display: none"><input id="motCalibrationRecordId" type="text" value=""></span>

                                        <button class="data-launch-save-mot-calibration-btn" id="saveMotCalibrationButton">Save</button>
                                    </div>
                                </div>



                                <div id="motBayCleaningLogModal" style="display: none" class="mot-bay-cleaning-log-modal-popup">
                                    <div class="mot-bay-cleaning-log-modal-content">
                                        <span class="mot-bay-cleaning-log-close">&times;</span>
                                        <h2>MOT Bay Cleaning Log</h2>
                                        
                                        <!-- Cleaning Log Details Section -->
                                        <div class="tab-content active">
                                            <label for="date">Date:</label>
                                            <input type="date" id="date" name="date">

                                            <label for="signed">Signed:</label>
                                            <input type="text" id="signed" name="signed">

                                            <label for="description">Description:</label>
                                            <textarea id="description" name="description"></textarea>

                                            <span style="display: none"><input id="motBayCleaningLogRecordId" type="text" value=""></span>
                                        </div>

                                        <button class="data-launch-save-mot-bay-cleaning-log-btn" id="saveMotBayCleaningLogButton">Save</button>
                                    </div>
                                </div>


                                <div id="defectReportModal" style="display: none" class="defect-report-modal-popup">
                                    <div class="defect-report-modal-content">
                                        <span class="defect-report-close">&times;</span>
                                        <h2>Defect Report</h2>
                                        
                                        <!-- Defect Report Details Section -->
                                        <div class="tab-content active">
                                            <label for="reference">Reference:</label>
                                            <input type="text" id="reference" name="reference">

                                            <label for="reportedDate">Reported Date:</label>
                                            <input type="date" id="reportedDate" name="reportedDate">

                                            <label for="details">Details:</label>
                                            <textarea id="details" name="details"></textarea>

                                            <label for="defectDescription">Defect Description:</label>
                                            <textarea id="defectDescription" name="defectDescription"></textarea>

                                            <label for="dvsaNotified">DVSA Notified:</label>
                                            <input type="checkbox" id="dvsaNotified" name="dvsaNotified">

                                            <label for="repaired">Repaired and working as it should:</label>
                                            <input type="checkbox" id="repaired" name="repaired">

                                            <label for="repairedDate">Repaired Date:</label>
                                            <input type="date" id="repairedDate" name="repairedDate">

                                            <label for="confirmedBy">Confirmed By:</label>
                                            <input type="text" id="confirmedBy" name="confirmedBy">

                                            <span style="display: none"><input id="defectReportRecordId" type="text" value=""></span>
                                        </div>

                                        <button class="data-launch-save-defect-report-btn" id="saveDefectReportButton">Save</button>
                                    </div>
                                </div>






                                <div id="garageBookingModal" class="modal-popup booking-modal-popup" style='display:none'>
                                    <div class="modal-content booking-modal-content">
                                        <span class="garage-booking-close">&times;</span>
                                        <h2>Garage Booking</h2>

                                        <!-- Tab Navigation -->
                                        <div class="tabs">
                                            <button class="tab-button active" onclick="openTab(event, 'BookingDetails', 'garageBookingModal')">Booking Details</button>
                                            <button class="tab-button" onclick="openTab(event, 'CustomerDetails', 'garageBookingModal')">Customer Details</button>
                                            <button class="tab-button" onclick="openTab(event, 'VehicleDetails', 'garageBookingModal')">Vehicle Details</button>
                                            <button class="tab-button" onclick="openTab(event, 'AdditionalInfo', 'garageBookingModal')">Additional Info</button>
                                        </div>

                                        <!-- Booking Details Section -->
                                        <div id="BookingDetails" class="tab-content active">
                                            <label for="bookingDate">Booking Date:</label>
                                            <input type="date" id="bookingDate"><br>

                                            <label for="timeStart">Start Time:</label>
                                            <input type="time" id="timeStart"><br>

                                            <label for="timeEnd">End Time:</label>
                                            <input type="time" id="timeEnd"><br>

                                            <label for="vehicleArrived">Vehicle Arrived:</label>
                                            <input type="checkbox" id="vehicleArrived"><br>

                                            <label for="motCompleted">MOT Completed:</label>
                                            <input type="checkbox" id="motCompleted"><br>
                                        </div>

                                        <!-- Customer Details Section -->
                                        <div id="CustomerDetails" class="tab-content">
                                            <label for="title">Title:</label>
                                            <input type="text" id="title"><br>

                                            <label for="customerFirstName">First Name:</label>
                                            <input type="text" id="customerFirstName"><br>

                                            <label for="customerLastName">Last Name:</label>
                                            <input type="text" id="customerLastName"><br>

                                            <label for="customerMobile">Mobile Number:</label>
                                            <input type="text" id="customerMobile"><br>

                                            <label for="customerEmail">Email:</label>
                                            <input type="email" id="customerEmail"><br>
                                        </div>

                                        <!-- Vehicle Details Section -->
                                        <div id="VehicleDetails" class="tab-content">
                                            <label for="vehicleReg">Vehicle Registration:</label>
                                            <input type="text" id="vehicleReg"><br>

                                            <label for="vehicleMake">Vehicle Make:</label>
                                            <input type="text" id="vehicleMake"><br>

                                            <label for="vehicleModel">Vehicle Model:</label>
                                            <input type="text" id="vehicleModel"><br>

                                            <label for="motDueDate">MOT Due Date:</label>
                                            <input type="date" id="motDueDate"><br>
                                        </div>

                                        <!-- Additional Info Section -->
                                        <div id="AdditionalInfo" class="tab-content">
                                            <input type="hidden" id="garageBookingRecordId">
                                        </div>

                                        <button class="data-launch-save-garage-bookings-btn">Save</button>
                                    </div>
                                </div>


                                






                                

                               <div id="qcCheckerModal" class="modal-popup qc-checker-modal-popup" style='display:none'>
                                    <div class="modal-content qc-checker-modal-content">
                                        <span class="qc-checker-close">&times;</span>
                                        <input style='display:none' type="text" id="qcCheckerRecordId" disabled><br>
                                        <h2>QC Checker for Car</h2>

                                        <!-- Tab Navigation -->
                                        <div class="tabs">
                                            <button class="tab-button active" onclick="openTab(event, 'SummarySection', 'qcCheckerModal')">Summary</button>
                                            <button class="tab-button" onclick="openTab(event, 'PreChecksSection', 'qcCheckerModal')">Pre Checks</button>
                                            <button class="tab-button" onclick="openTab(event, 'InsideVehicleSection', 'qcCheckerModal')">Inside Vehicle</button>
                                            <button class="tab-button" onclick="openTab(event, 'GasAnalysisSection', 'qcCheckerModal')">Gas Analysis</button>
                                            <button class="tab-button" onclick="openTab(event, 'VehicleLightSection', 'qcCheckerModal')">Vehicle Light</button>
                                            <button class="tab-button" onclick="openTab(event, 'BonnetOpenSection', 'qcCheckerModal')">Bonnet Open</button>
                                            <button class="tab-button" onclick="openTab(event, 'VehicleRaisedFullHeightSection', 'qcCheckerModal')">Vehicle Raised to Full Height</button>
                                            <button class="tab-button" onclick="openTab(event, 'VehicleRaisedHalfHeightSection', 'qcCheckerModal')">Vehicle Raised to Half Height</button>
                                            <button class="tab-button" onclick="openTab(event, 'TurnPlatesSection', 'qcCheckerModal')">Use of Turn Plates</button>
                                            <button class="tab-button" onclick="openTab(event, 'BrakePerformanceTestSection', 'qcCheckerModal')">Brake Performance Test</button>
                                        </div>

                                    <!-- Summary Section -->
                                <div id="SummarySection" class="tab-content active">
                                    <label for="data_launch_qc_checkers_for_cars_testerName">Tester Name:</label>
                                    <input type="text" id="data_launch_qc_checkers_for_cars_testerName"><br>

                                    <label for="data_launch_qc_checkers_for_cars_testerID">Tester ID:</label>
                                    <input type="text" id="data_launch_qc_checkers_for_cars_testerID"><br>

                                    <label for="data_launch_qc_checkers_for_cars_vehicleReg">Vehicle Reg:</label>
                                    <input type="text" id="data_launch_qc_checkers_for_cars_vehicleReg"><br>

                                    <label for="data_launch_qc_checkers_for_cars_dateOfQC">Date of QC:</label>
                                    <input type="date" id="data_launch_qc_checkers_for_cars_dateOfQC"><br>

                                    <label for="data_launch_qc_checkers_for_cars_qcCarriedOutBy">QC Carried out by:</label>
                                    <input type="text" id="data_launch_qc_checkers_for_cars_qcCarriedOutBy"><br>

                                    <label for="data_launch_qc_checkers_for_cars_consultant">Consultant:</label>
                                    <input type="text" id="data_launch_qc_checkers_for_cars_consultant"><br>

                                    <label for="data_launch_qc_checkers_for_cars_vehicleClass">Vehicle Class:</label>
                                    <input type="text" id="data_launch_qc_checkers_for_cars_vehicleClass"><br>
                                </div>

                                <!-- Pre Checks Section -->
                                <div id="PreChecksSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_doorsOpen">All required doors open:</label>
                                    <select id="data_launch_qc_checkers_for_cars_doorsOpen">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_bonnetOpens">Bonnet opens as required:</label>
                                    <select id="data_launch_qc_checkers_for_cars_bonnetOpens">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_bootOpens">Boot opens as required:</label>
                                    <select id="data_launch_qc_checkers_for_cars_bootOpens">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_fuelCapOpens">Fuel cap opens:</label>
                                    <select id="data_launch_qc_checkers_for_cars_fuelCapOpens">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_chassisNumberTaken">Chassis number taken:</label>
                                    <select id="data_launch_qc_checkers_for_cars_chassisNumberTaken">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_conditionOfRegistrationPlate">Condition of registration plate:</label>
                                    <select id="data_launch_qc_checkers_for_cars_conditionOfRegistrationPlate">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_vehicleSafeForTest">Vehicle safe for test:</label>
                                    <select id="data_launch_qc_checkers_for_cars_vehicleSafeForTest">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_vehicleCorrectlyRegistered">Vehicle correctly registered:</label>
                                    <select id="data_launch_qc_checkers_for_cars_vehicleCorrectlyRegistered">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>
                                </div>

                                <!-- Inside Vehicle Section -->
                                <div id="InsideVehicleSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_brakePedalServoOperation">Brake pedal and servo operation checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_brakePedalServoOperation">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_passengerDoorOpens">Passenger door opens:</label>
                                    <select id="data_launch_qc_checkers_for_cars_passengerDoorOpens">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_allPassengerSeatsChecked">All passenger seats checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_allPassengerSeatsChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_allMandatoryMirrorsChecked">All mandatory mirrors checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_allMandatoryMirrorsChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_handbrakeOperationChecked">Handbrake operation checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_handbrakeOperationChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_steeringUJChecked">Steering UJ checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_steeringUJChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_steeringFreePlayChecked">Steering free play checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_steeringFreePlayChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_steeringAntiTheftLockChecked">Steering anti-theft lock checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_steeringAntiTheftLockChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_audibleWarningChecked">Audible warning checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_audibleWarningChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_washersWipersChecked">Washers and wipers checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_washersWipersChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_seatbeltsChecked">Seatbelts checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_seatbeltsChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>
                                </div>

                                <!-- Gas Analysis Section -->
                                <div id="GasAnalysisSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_vehicleCorrectlyEnteredEmissionMachine">Vehicle correctly entered on emission machine:</label>
                                    <select id="data_launch_qc_checkers_for_cars_vehicleCorrectlyEnteredEmissionMachine">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_correctEmissionStandardsApplied">Correct emission standards applied:</label>
                                    <select id="data_launch_qc_checkers_for_cars_correctEmissionStandardsApplied">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_ntSelectCorrectEmissionLimits">NT selects correct emission limits:</label>
                                    <select id="data_launch_qc_checkers_for_cars_ntSelectCorrectEmissionLimits">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_oilLevelChecked">Oil level checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_oilLevelChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>
                                </div>

                                <!-- Vehicle Light Section -->
                                <div id="VehicleLightSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_ntCorrectlyUsesBeamSetter">NT correctly uses beam setter:</label>
                                    <select id="data_launch_qc_checkers_for_cars_ntCorrectlyUsesBeamSetter">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_headlampAimChecked">Headlamp aim checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_headlampAimChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_headlampUnitsSecure">Headlamp units secure:</label>
                                    <select id="data_launch_qc_checkers_for_cars_headlampUnitsSecure">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_rearLightUnitsSecure">Rear light units secure:</label>
                                    <select id="data_launch_qc_checkers_for_cars_rearLightUnitsSecure">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_lightsInterfereWithAnother">Do any lights interfere with another:</label>
                                    <select id="data_launch_qc_checkers_for_cars_lightsInterfereWithAnother">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_ntUsesMethodicalProcess">NT uses methodical process:</label>
                                    <select id="data_launch_qc_checkers_for_cars_ntUsesMethodicalProcess">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>
                                </div>

                                <!-- Bonnet Open Section -->
                                <div id="BonnetOpenSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_steeringSecurityChecked">Steering security checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_steeringSecurityChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_batterySecure">Battery secure:</label>
                                    <select id="data_launch_qc_checkers_for_cars_batterySecure">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_brakeSystemInspectedUnderPressure">Brake system inspected under pressure:</label>
                                    <select id="data_launch_qc_checkers_for_cars_brakeSystemInspectedUnderPressure">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_allFluidLevelsInspected">All fluid levels inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_allFluidLevelsInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_fuelSystemInspected">Fuel system inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_fuelSystemInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_generalConditionInspected">General condition inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_generalConditionInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>
                                </div>

                                <!-- Vehicle Raised to Full Height Section -->
                                <div id="VehicleRaisedFullHeightSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_steeringInspectedUsingEquipment">Steering inspected using equipment:</label>
                                    <select id="data_launch_qc_checkers_for_cars_steeringInspectedUsingEquipment">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_brakeSystemInspected">Brake system inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_brakeSystemInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_exhaustChecked">Exhaust checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_exhaustChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_driveshaftInspected">Driveshaft inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_driveshaftInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_fuelSystemInspectedWhileRunning">Fuel system inspected while running:</label>
                                    <select id="data_launch_qc_checkers_for_cars_fuelSystemInspectedWhileRunning">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_suspensionComponentsInspected">Suspension components inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_suspensionComponentsInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_undersideInspectedForCorrosion">Underside inspected for corrosion:</label>
                                    <select id="data_launch_qc_checkers_for_cars_undersideInspectedForCorrosion">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_vehicleRaisedCorrectly">Vehicle raised correctly:</label>
                                    <select id="data_launch_qc_checkers_for_cars_vehicleRaisedCorrectly">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>
                                </div>

                                <!-- Vehicle Raised to Half Height Section -->
                                <div id="VehicleRaisedHalfHeightSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_tyresInspected">Tyres inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_tyresInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_suspensionComponentsChecked">Suspension components checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_suspensionComponentsChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_brakeHosesInspected">Brake hoses inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_brakeHosesInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_allGaitersInspected">All gaiters inspected:</label>
                                    <select id="data_launch_qc_checkers_for_cars_allGaitersInspected">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_wheelSecurityAssessed">Wheel security assessed:</label>
                                    <select id="data_launch_qc_checkers_for_cars_wheelSecurityAssessed">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_brakeComponentsAssessed">Brake components assessed:</label>
                                    <select id="data_launch_qc_checkers_for_cars_brakeComponentsAssessed">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_ntUsedATL">NT used ATL:</label>
                                    <select id="data_launch_qc_checkers_for_cars_ntUsedATL">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>
                                </div>

                                <!-- Use of Turn Plates Section -->
                                <div id="TurnPlatesSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_conditionOfTurnPlates">Condition of turn plates:</label>
                                    <select id="data_launch_qc_checkers_for_cars_conditionOfTurnPlates">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_ntCanUseTurnPlates">NT can use turn plates:</label>
                                    <select id="data_launch_qc_checkers_for_cars_ntCanUseTurnPlates">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_turnPlatesUsedForLockCheck">Turn plates used for lock check:</label>
                                    <select id="data_launch_qc_checkers_for_cars_turnPlatesUsedForLockCheck">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>
                                </div>

                                <!-- Brake Performance Test Section -->
                                <div id="BrakePerformanceTestSection" class="tab-content">
                                    <label for="data_launch_qc_checkers_for_cars_frontAxleBrakePerformance">Front axle brake performance:</label>
                                    <select id="data_launch_qc_checkers_for_cars_frontAxleBrakePerformance">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_rearAxleBrakePerformance">Rear axle brake performance:</label>
                                    <select id="data_launch_qc_checkers_for_cars_rearAxleBrakePerformance">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_emergencyBrakePerformance">Emergency brake performance:</label>
                                    <select id="data_launch_qc_checkers_for_cars_emergencyBrakePerformance">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_brakeBindReleaseCheck">Brake bind release check:</label>
                                    <select id="data_launch_qc_checkers_for_cars_brakeBindReleaseCheck">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_brakeJudderAssessed">Brake judder assessed:</label>
                                    <select id="data_launch_qc_checkers_for_cars_brakeJudderAssessed">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_notes">Notes:</label>
                                    <textarea id="data_launch_qc_checkers_for_cars_notes"></textarea><br>

                                    <label for="data_launch_qc_checkers_for_cars_tqiChecked">TQI Checked:</label>
                                    <select id="data_launch_qc_checkers_for_cars_tqiChecked">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="n/a">N/A</option>
                                    </select><br>

                                    <label for="data_launch_qc_checkers_for_cars_confirmedByTester">Confirmed by tester:</label>
                                    <input type="text" id="data_launch_qc_checkers_for_cars_confirmedByTester"><br>
                                </div>


                                        <button class="data-launch-save-qc-checkers-btn" id="saveQcCheckerButton">Save</button>
                                    </div>
                                </div>




                                <div id="motSiteAuditModal" style="display: none;" class="modal mot-site-audit-modal-popup">
                                    <div class="modal-content mot-site-audit-modal-content">
                                        <span class="mot-site-audit-close">&times;</span>
                                        <h2>Site Audit</h2>
                                        
                                        <!-- Tab Navigation -->
                                        <div class="tabs">
                                            <button class="tab-button active" onclick="openTab(event, 'SiteAuditSummarySection', 'motSiteAuditModal')">Summary</button>
                                            <button class="tab-button" onclick="openTab(event, 'SiteAuditComplianceSection', 'motSiteAuditModal')">Compliance</button>
                                            <button class="tab-button" onclick="openTab(event, 'SiteAuditCalibrationSection', 'motSiteAuditModal')">Calibration</button>
                                            <button class="tab-button" onclick="openTab(event, 'TesterStaffComplianceSection', 'motSiteAuditModal')">Tester and Staff Compliance</button>
                                            <button class="tab-button" onclick="openTab(event, 'EquipmentWorkshopComplianceSection', 'motSiteAuditModal')">Equipment and Workshop Compliance</button>
                                            <button class="tab-button" onclick="openTab(event, 'ToolsWorkingOrderSection', 'motSiteAuditModal')">Tools in Working Order</button>
                                        </div>

                                        <!-- Tab Content -->
                                        <div id="SiteAuditSummarySection" class="tab-content active">
                                            <input style='display:none' type="text" id="siteAuditRecordId" disabled><br>
                                            <label for="site_audit_consultant">Consultant:</label>
                                            <input type="text" id="site_audit_consultant"><br>

                                            <label for="site_audit_auditor">Auditor:</label>
                                            <input type="text" id="site_audit_auditor"><br>

                                            <label for="site_audit_auditDate">Audit Date:</label>
                                            <input type="date" id="site_audit_auditDate"><br>
                                        </div>

                                        <div id="SiteAuditComplianceSection" class="tab-content">
                                            <label for="site_audit_customerAreasAccessible">Customer areas accessible:</label>
                                            <select id="site_audit_customerAreasAccessible">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_receptionClean">Reception clean:</label>
                                            <select id="site_audit_receptionClean">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_viewingAreaVisible">Viewing area visible:</label>
                                            <select id="site_audit_viewingAreaVisible">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_facilitiesClean">Facilities clean:</label>
                                            <select id="site_audit_facilitiesClean">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_noticeBoardUpdated">Notice board updated:</label>
                                            <select id="site_audit_noticeBoardUpdated">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_examinerDetailsDisplayed">Examiner details displayed:</label>
                                            <select id="site_audit_examinerDetailsDisplayed">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_reducedRateFees">Reduced rate fees displayed:</label>
                                            <select id="site_audit_reducedRateFees">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_noticeBoardsVisible">Notice boards visible:</label>
                                            <select id="site_audit_noticeBoardsVisible">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_vt9aCorrectInfo">VT9a displayed correctly:</label>
                                            <select id="site_audit_vt9aCorrectInfo">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_openingHoursCorrect">Opening hours correct:</label>
                                            <select id="site_audit_openingHoursCorrect">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_workloadManagementSystem">Workload management system appropriate:</label>
                                            <select id="site_audit_workloadManagementSystem">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_managementSystemDemonstrable">Management system demonstrable:</label>
                                            <select id="site_audit_managementSystemDemonstrable">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_adequateBookingSystem">Adequate booking system:</label>
                                            <select id="site_audit_adequateBookingSystem">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_recordsWithoutMot">No MOT records provided:</label>
                                            <select id="site_audit_recordsWithoutMot">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_emissionReportsMatch">Emission reports match findings:</label>
                                            <select id="site_audit_emissionReportsMatch">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_handoverProcessEffective">Handover process effective:</label>
                                            <select id="site_audit_handoverProcessEffective">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_documentationRetrievable">Documentation easily retrievable:</label>
                                            <select id="site_audit_documentationRetrievable">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_staffSuggestionsRecorded">Staff suggestions recorded:</label>
                                            <select id="site_audit_staffSuggestionsRecorded">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_followingCodesOfPractice">Following codes of practice:</label>
                                            <select id="site_audit_followingCodesOfPractice">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>
                                        </div>

                                        <div id="SiteAuditCalibrationSection" class="tab-content">
                                            <label for="site_audit_calibrationRecordsCorrect">Calibration records correct:</label>
                                            <select id="site_audit_calibrationRecordsCorrect">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_equipmentManualsAvailable">Equipment manuals available:</label>
                                            <select id="site_audit_equipmentManualsAvailable">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_dvsaFormsAvailable">DVSA forms available:</label>
                                            <select id="site_audit_dvsaFormsAvailable">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_qualityManagementProcess">Quality management process in place:</label>
                                            <select id="site_audit_qualityManagementProcess">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_managementSystemDemonstrable">Management system demonstrable:</label>
                                            <select id="site_audit_managementSystemDemonstrable">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_adequateBookingSystem">Adequate booking system:</label>
                                            <select id="site_audit_adequateBookingSystem">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>
                                        </div>

                                        <div id="TesterStaffComplianceSection" class="tab-content">
                                            <label for="site_audit_specialNoticesAccessible">Special notices accessible:</label>
                                            <select id="site_audit_specialNoticesAccessible">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_mattersOfTesting">Matters of Testing blog read by staff:</label>
                                            <select id="site_audit_mattersOfTesting">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_motTestingGuide">MOT Testing Guide reference available:</label>
                                            <select id="site_audit_motTestingGuide">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_correctNumberOfStaff">Correct number of staff:</label>
                                            <select id="site_audit_correctNumberOfStaff">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_accessTesterInformation">Tester Information accessible:</label>
                                            <select id="site_audit_accessTesterInformation">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_bonusForMotTesting">Bonus for MOT testing:</label>
                                            <select id="site_audit_bonusForMotTesting">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_otherIncentivesInfluence">Other incentives influencing MOT:</label>
                                            <select id="site_audit_otherIncentivesInfluence">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_qualityChecksRegular">Regular quality checks of MOT testers:</label>
                                            <select id="site_audit_qualityChecksRegular">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_dvsaTrainingRecords">DVSA training records available:</label>
                                            <select id="site_audit_dvsaTrainingRecords">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_cpdTrainingRecords">CPD training records available:</label>
                                            <select id="site_audit_cpdTrainingRecords">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_monitorTestLogs">Monitoring of test logs:</label>
                                            <select id="site_audit_monitorTestLogs">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_passwordsLeftAvailable">Tester passwords compromised:</label>
                                            <select id="site_audit_passwordsLeftAvailable">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_fraudulentTests">Indications of fraudulent tests:</label>
                                            <select id="site_audit_fraudulentTests">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>
                                        </div>

                                        <div id="EquipmentWorkshopComplianceSection" class="tab-content">
                                            <label for="site_audit_baysMarked">Bays clearly marked:</label>
                                            <select id="site_audit_baysMarked">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_baysAllowForTests">Bays allow for testing volume:</label>
                                            <select id="site_audit_baysAllowForTests">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_correctVehicleRegistered">Correct vehicle registered:</label>
                                            <select id="site_audit_correctVehicleRegistered">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_workingAreasClean">Working areas clean and hazard-free:</label>
                                            <select id="site_audit_workingAreasClean">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_housekeepingRegular">Regular housekeeping:</label>
                                            <select id="site_audit_housekeepingRegular">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_wasteStoredProperly">Waste and recyclables stored properly:</label>
                                            <select id="site_audit_wasteStoredProperly">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_staffWorkingSafely">Staff working safely:</label>
                                            <select id="site_audit_staffWorkingSafely">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_equipmentInGoodOrder">Workshop equipment in good order:</label>
                                            <select id="site_audit_equipmentInGoodOrder">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_motBayLocationApparent">MOT bay location apparent:</label>
                                            <select id="site_audit_motBayLocationApparent">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_equipmentMaintained">Equipment maintained properly:</label>
                                            <select id="site_audit_equipmentMaintained">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_maintenanceLogsKept">Maintenance logs kept:</label>
                                            <select id="site_audit_maintenanceLogsKept">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_emissionReportsAvailable">Recent emission reports available:</label>
                                            <select id="site_audit_emissionReportsAvailable">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>
                                        </div>

                                        <div id="ToolsWorkingOrderSection" class="tab-content">
                                            <label for="site_audit_treadDepthGauge">Tread depth gauge available:</label>
                                            <select id="site_audit_treadDepthGauge">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_inspectionLamp">Inspection lamp available:</label>
                                            <select id="site_audit_inspectionLamp">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_pryPinchBars">Pry/pinch bars available:</label>
                                            <select id="site_audit_pryPinchBars">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_corrosionTool">Corrosion assessment tool available:</label>
                                            <select id="site_audit_corrosionTool">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_steelTapeMeasure">Steel tape measure available:</label>
                                            <select id="site_audit_steelTapeMeasure">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_mirrorCameras">Mirrors/cameras for lights check available:</label>
                                            <select id="site_audit_mirrorCameras">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_wheelChocks">Wheel chocks available:</label>
                                            <select id="site_audit_wheelChocks">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_brakePedalDepressor">Brake pedal depressor available:</label>
                                            <select id="site_audit_brakePedalDepressor">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_trailerSocketTestingTool">Trailer socket testing tool available:</label>
                                            <select id="site_audit_trailerSocketTestingTool">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_leakDetectionSpray">Leak detection spray available:</label>
                                            <select id="site_audit_leakDetectionSpray">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_oilTemperatureProbe">Oil temperature probe available:</label>
                                            <select id="site_audit_oilTemperatureProbe">
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                                <option value="n/a">N/A</option>
                                            </select><br>

                                            <label for="site_audit_emissionReportSameFindings">Emission report findings same:</label>
                                            <input type="text" id="site_audit_emissionReportSameFindings"><br>

                                            <label for="site_audit_siteAuditFindings">Site audit findings:</label>
                                            <input type="text" id="site_audit_siteAuditFindings"><br>

                                            <label for="site_audit_auditorPrint">Auditor print:</label>
                                            <input type="text" id="site_audit_auditorPrint"><br>
                                        </div>

                                        <button class="data-launch-save-site-audit-btn" id="saveSiteAuditButton">Save</button>
                                    </div>
                                </div>




    

                                <div style='display: none' class='data-launch-notes-modal-box-popup-cont' id='data-launch-mot-equipment-modal-box-popup'>
                                    <div class="modal-overlay data-launch-mot-equipment-modal-overlay">
                                        <div class="modal-content modern-modal data-launch-mot-equipment-modal-content">
                                            <button class='data-launch-mot-equipment-close-button modern-close-button'>X</button>
                                            <h2 class="modern-modal-title">Add New MOT Equipment</h2>
                                            <label for="equipmentType" class="modern-modal-label">Equipment Type:</label>
                                            <input type="text" id="mot_equipment_equipment_type_${this.id}" name="equipmentType" placeholder="Enter Equipment Type..." class="modern-modal-input">
                                            <label for="make" class="modern-modal-label">Make:</label>
                                            <input type="text" id="mot_equipment_make_${this.id}" name="make" placeholder="Enter Make..." class="modern-modal-input">
                                            <label for="model" class="modern-modal-label">Model:</label>
                                            <input type="text" id="mot_equipment_model_${this.id}" name="model" placeholder="Enter Model..." class="modern-modal-input">
                                            <label for="serial_no" class="modern-modal-label">Serial No:</label>
                                            <input type="text" id="mot_equipment_serial_no_${this.id}" name="serial_no" placeholder="Enter Serial No..." class="modern-modal-input">
                                            <label for="bay" class="modern-modal-label">Bay:</label>
                                            <input type="text" id="mot_equipment_bay_${this.id}" name="bay" placeholder="Enter Bay..." class="modern-modal-input">
                                             <label for="lastServiceDate" class="modern-modal-label">Last Service Date:</label>
                                            <input type="date" id="mot_equipment_last_service_date_${this.id}" name="lastServiceDate" placeholder="Enter Last Service Date..." class="modern-modal-input">
                                             <label for="nextServiceDate" class="modern-modal-label">Next Service Date:</label>
                                            <input type="date" id="mot_equipment_next_service_date_${this.id}" name="nextServiceDate" placeholder="Enter Next Service Date..." class="modern-modal-input">
                                                <button class="btn btn-primary data-launch-save-mot-equipment-btn modern-save-button">Save MOT Equipment</button>
                                            </div>
                                             <label for="notes" class="modern-modal-label">Notes:</label>
                                            <input type="text" id="mot_equipment_notes_${this.id}" name="notes" placeholder="Enter Notes..." class="modern-modal-input">
                                            <span style="display: none"><input id="motEquipmentRecordId" type="text" value=""></span>
                                        </div>
                                    </div>                                
                                </div>
                                <button type="button" id="data-launch-garages-save-close" class="btn btn-outline-primary data-launch-save-close-record">Save & Close</button>
                                <div class='data-launch-record-header modern-record-header'>
                                    <h3 class="modern-record-title">${rec.trading_name}</h3>
                                    <h3 class="modern-record-subtitle">Garage Record - ${rec.vts_site_number} - ${rec.id}</h3>                    
                                </div>
                                <div class='data-launch-tabs-container'>
                                    <nav class="navbar navbar-expand-lg navbar-light modern-navbar">
                                        <div class="container-fluid data-launch-form-tabs-container modern-navbar-container">
                                            <button class="navbar-toggler modern-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div class="collapse navbar-collapse" id="navbarNav">
                                                <ul class="navbar-nav modern-navbar-nav">
                                                ${this.buildFormMenu()}
                                                </ul>
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
             // <i class="bi bi-plus data-launch-nav-menu-plus-icon" id="data-launch-nav-menu-plus-icon"></i>
            html = `
            <div class='container-fluid'>
                            <div class='row'>
                                <div style='display: none' class='data-launch-confirmation-box-inject' id='data-launch-confirmation-box-inject'></div>
                                <button type="button" id="data-launch-garage-save-close" class="btn btn-outline-primary data-launch-save-close-record">Save & Close</button>
                                <div class='data-launch-record-header'>
                                    <h3></h3>
                                    <h3>New Garage Record</h3>                  
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
        document.getElementById('garagePage').innerHTML = html
        this.injectDataIntoAssociatedTestersSubgrid()
        this.injectDataIntoMotEquipmentSubgrid()
        this.injectDataIntoMotCalibrationSubgrid()
        this.injectDataIntoMotSiteAuditsSubgrid()
        this.injectDataIntoQcCheckersSubgrid()
        this.injectDataIntoGarageBookingsSubgrid()
        this.injectDataIntoDefectReportsSubgrid()
        this.injectDataIntoMotBayCleaningLogSubgrid()
        this.injectDataIntoQcCheckersForBikesSubgrid();
    }


    saveAndClose () {
        // this effectively deletes the element, including all of the event listeners, and then creates a new copy with zero event listeners attached
        this.saveDetailsAboutTheRecord()
        const oldElement = document.getElementById('garagePage');
        const newElement = oldElement.cloneNode(true); // Cloning with all children and attributes
        oldElement.parentNode.replaceChild(newElement, oldElement);
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
                if (document.getElementById(`${fields[i].field}_val`).value || document.getElementById(`${fields[i].field}_val`).value === '') {
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
            console.log('createRecordObject', createRecordObject)  
            createRecordObject.id = garage_record_next_id
            createRecord('garage_records', createRecordObject).then(
                function success (res) {
                    console.log('CREATED NEW GARAGE RECORDS IN DB', res)
                    garage_record_next_id++
                    this.renderHTMLHeader()
                },
                function error (err) {
                    console.log(err)
                    this.renderHTMLHeader()
                }
            )
        }
        else {
            console.log('update garage record Object ', createRecordObject)  
            createRecordObject.id = this.recordId
            updateRecord('garage_records', this.recordId, createRecordObject).then(res => {
                    console.log('UPDATED EXISTING GARAGE RECORDS ???', res)
                    for (let i = 0; i < this.data.length; i++) {
                        if (this.data[i].id === createRecordObject.id ) {
                            this.data[i] = createRecordObject                          
                        }        
                    }
                    for (let i = 0; i < garageData.length; i++) {
                        if (garageData[i].id === createRecordObject.id) {
                            garageData[i] = createRecordObject                         
                        }
                    }
                    this.renderHTMLHeader()
                },
                err => {
                    console.log(err)
                    this.renderHTMLHeader()
                }
            )
        }    
    }

    ///////  MOT CALIBRATION SUBGRID MODAL HANDLERS
    ////// SHOW MODAL FOR NEW RECORD 
    showMotCalibrationModal () {
        this.motCalibrationDocumentFiles = []
        document.getElementById('motCalibrationModal').style.display = 'block'
        document.getElementById('mot_equipment_type').value = ''
        document.getElementById('mot_make').value =''
        document.getElementById('mot_model').value = ''
        document.getElementById('mot_serial_no').value = ''
        document.getElementById('mot_last_calibration_date').value = ''
        document.getElementById('mot_next_calibration_date').value = ''
        document.getElementById('mot_notes').value = ''
        // document.getElementById('mot_image_container').style.display = 'none'
    }
    ////// MOT CALIBRATION SUBGRID MODAL HANDLERS
    ///// SAVE NEW OR EXISTING RECORD
    saveNewMotCalibration() {
        // Gathering data from the modal form
        const equipmentType = document.getElementById('mot_equipment_type').value;
        const make = document.getElementById('mot_make').value;
        const model = document.getElementById('mot_model').value;
        const serialNo = document.getElementById('mot_serial_no').value;
        const lastCalibrationDate = document.getElementById('mot_last_calibration_date').value;
        const nextCalibrationDate = document.getElementById('mot_next_calibration_date').value;
        const notes = document.getElementById('mot_notes').value;
        // const imageFile = document.getElementById('mot_image_upload').files[0];
        const motCalibrationRecordId = document.getElementById('motCalibrationRecordId').value;

        // Creating the object to send to the server
        const newRecord = {
            equipment_type: equipmentType,
            make: make,
            model: model,
            serial_no: serialNo,
            last_calibration_date: lastCalibrationDate,
            next_calibration_date: nextCalibrationDate,
            notes: notes,
            garage_id: this.id
            // ,
            // document_data: base64String,  // Store the image in the document_data
            // document_name: fileName       // Store the file name
        };

        if (motCalibrationRecordId === "") {
            // Sending the data to the server to create a new record
            createRecord('data_launch_mot_calibration', newRecord).then(res => {
                console.log('data_launch_mot_calibration res', res)
                for (let i = 0; i < this.motCalibrationDocumentFiles.length; i++) {
                    this.motCalibrationDocumentFiles[i].tester_id = this.id
                    this.motCalibrationDocumentFiles[i].record_id = res.id
                    this.motCalibrationDocumentFiles[i].record_type = 'mot_calibration_images'
                    console.log('heres what im trying to send to data_launch_images ' , this.motCalibrationDocumentFiles[i])
                    createRecord('data_launch_images', this.motCalibrationDocumentFiles[i]).then(result =>{
                        console.log('successfully created data launch images result', result)
                    }, err => {
                        console.error(err)
                    })                  
                }
                this.injectDataIntoMotCalibrationSubgrid()
            }, err => { 
                console.error(err); 
            });
        } else {
            // Updating the existing record
            let recordId = parseInt(motCalibrationRecordId);
            newRecord.id = recordId;
            updateRecord('data_launch_mot_calibration', recordId, newRecord).then(res => {
                console.log('data_launch_mot_calibration res', res);
                for (let i = 0; i < this.motCalibrationDocumentFiles.length; i++) {
                    this.motCalibrationDocumentFiles[i].tester_id = this.id
                    this.motCalibrationDocumentFiles[i].record_id = res.id
                    this.motCalibrationDocumentFiles[i].record_type = 'mot_calibration_images'
                    console.log('heres what im trying to send to data_launch_images ' , this.motCalibrationDocumentFiles[i])
                    createRecord('data_launch_images', this.motCalibrationDocumentFiles[i]).then(result =>{
                        console.log('successfully created data launch images result', result)
                    }, err => {
                        console.error(err)
                    })                  
                }   
                for (let i = 0; i < this.motCalibrationData.length; i++) {
                    if (this.motCalibrationData[i].id === recordId) {
                        this.motCalibrationData[i] = res;
                    }        
                }
                this.injectDataIntoMotCalibrationSubgrid();
            }, err => { 
                console.error(err); 
            });
        }
    }
    ////// MOT CALIBRATION SUBGRID MODAL HANDLERS
    ////// SHOW MODAL FOR EXISTING RECORD
    showMotCalibrationDetails(calibrationId) {
        this.motCalibrationDocumentFiles = []
        let data;
        for (let i = 0; i < this.motCalibrationData.length; i++) {
            if (this.motCalibrationData[i].id === parseInt(calibrationId)) {
                data = this.motCalibrationData[i];
                break;
            }
        }

        if (!data) {
            console.error('Calibration record not found:', calibrationId);
            return;
        }

        console.log('show mot calibration details', data);
        document.getElementById('mot_equipment_type').value = data.equipment_type;
        document.getElementById('mot_make').value = data.make;
        document.getElementById('mot_model').value = data.model;
        document.getElementById('mot_serial_no').value = data.serial_no;
        document.getElementById('mot_last_calibration_date').value = data.last_calibration_date;
        document.getElementById('mot_next_calibration_date').value = data.next_calibration_date;
        document.getElementById('mot_notes').value = data.notes;
        document.getElementById('motCalibrationRecordId').value = data.id || '';
        // Display the modal
        document.getElementById('motCalibrationModal').style.display = 'block';
        fetchData('data_launch_images', 100, 0, null, null, this.id, parseInt(data.id)).then(
            res => {
                console.log('data_launch_images res', res)
                let imageData = res
                this.motCalibrationDocumentFiles = res
                let html = ''
                for (let i = 0; i < imageData.length; i++) {
                    html += `
                        <tr id='mot_calibration_files_row_${i}'>
                            <td id='mot_calibration_files_row_${i}_name'>${imageData[i].name}</td>
                            <td id='mot_calibration_files_row_${i}_type'>${imageData[i].type}</td>
                            `
                    if (imageData[i].type === 'application/pdf') {
                        html += `<td id='mot_calibration_files_row_${i}_cdnUrl'><a target="_blank" href="${imageData[i].cdnUrl}"><i class="bi bi-file-earmark-pdf-fill"></i></a></td>`
                    }
                    else if (imageData[i].type === 'application/msword') {
                        html += `<td id='mot_calibration_files_row_${i}_cdnUrl'><a target="_blank" href="${imageData[i].cdnUrl}"><i class="bi bi-file-earmark-word-fill"></i></a></td>`
                    }
                    else {
                        html += `<td id='mot_calibration_files_row_${i}_cdnUrl'><a target="_blank" href="${imageData[i].cdnUrl}"><img style='height: 50px; width: 50px;' src="${imageData[i].cdnUrl}"></a></td>`
                    }
                    html += `
                            <td><i class="bi bi-trash data-launch-subgrid-delete-document-item" data-row-id='${i}' data-id='${imageData[i].id}'></i></td>  
                        </tr>
                    `            
                }
                document.getElementById(`garageMotCalibrationsDocumentsTableBody_${this.id}`).innerHTML = html
            },
            err => {
                console.log('error', err)
            }
        )
    }


    //// MOT EQUIPMENT MODAL
    showMotEquipmentModal() {
        document.getElementById('data-launch-mot-equipment-modal-box-popup').style.display = 'block';
        
        // Reset all fields
        document.getElementById(`mot_equipment_equipment_type_${this.id}`).value = '';
        document.getElementById(`mot_equipment_make_${this.id}`).value = '';
        document.getElementById(`mot_equipment_bay_${this.id}`).value = '';
        document.getElementById(`mot_equipment_model_${this.id}`).value = '';
        document.getElementById(`mot_equipment_serial_no_${this.id}`).value = '';
        document.getElementById(`mot_equipment_last_service_date_${this.id}`).value = '';
        document.getElementById(`mot_equipment_next_service_date_${this.id}`).value = '';
        document.getElementById(`mot_equipment_notes_${this.id}`).value = '';
        // document.getElementById('mot_equipment_image_container').style.display = 'none';
        document.getElementById('motEquipmentRecordId').value = ''; // Hidden input to track record ID
    }
    //////////////////////
    ///// SAVE NEW MOT EQUIPMENT
    saveNewMotEquipment() {
        // Gathering data from the modal form
        const equipmentType = document.getElementById(`mot_equipment_equipment_type_${this.id}`).value;
        const make = document.getElementById(`mot_equipment_make_${this.id}`).value;
        const model = document.getElementById(`mot_equipment_model_${this.id}`).value;
        const bay = document.getElementById(`mot_equipment_bay_${this.id}`).value;
        const serialNo = document.getElementById(`mot_equipment_serial_no_${this.id}`).value;
        const lastServiceDate = document.getElementById(`mot_equipment_last_service_date_${this.id}`).value;
        const nextServiceDate = document.getElementById(`mot_equipment_next_service_date_${this.id}`).value;
        const notes = document.getElementById(`mot_equipment_notes_${this.id}`).value;
        // const imageFile = document.getElementById('mot_equipment_image_upload').files[0];
        const motEquipmentRecordId = document.getElementById('motEquipmentRecordId').value;
    
        // Creating the object to send to the server
        const newRecord = {
            equipment_type: equipmentType,
            make: make,
            model: model,
            serial_no: serialNo,
            last_service_date: lastServiceDate,
            next_service_date: nextServiceDate,
            bay: bay,
            notes: notes,
            garage_id: this.id
            // ,
            // document_data: base64String,  // Store the image in the document_data
            // document_name: fileName       // Store the file name
        };
    
        if (motEquipmentRecordId === "") {
            // Sending the data to the server to create a new record
            createRecord('data_launch_mot_equipment', newRecord).then(res => {
                console.log('data_launch_mot_equipment res', res);
                this.injectDataIntoMotEquipmentSubgrid();
            }, err => { 
                console.error(err); 
            });
        } else {
            // Updating the existing record
            let recordId = parseInt(motEquipmentRecordId);
            newRecord.id = recordId;
            updateRecord('data_launch_mot_equipment', recordId, newRecord).then(res => {
                console.log('data_launch_mot_equipment res', res);
                for (let i = 0; i < this.motEquipmentData.length; i++) {
                    if (this.motEquipmentData[i].id === recordId) {
                        this.motEquipmentData[i] = res;
                    }        
                }
                this.injectDataIntoMotEquipmentSubgrid();
            }, err => { 
                console.error(err); 
            });
        }
    }
    /// SHOW MOT EXISTING RECORD
    showMotEquipmentDetails(equipmentId) {
        // Find the equipment record by ID
        let data;
        for (let i = 0; i < this.motEquipmentData.length; i++) {
            if (this.motEquipmentData[i].id === parseInt(equipmentId)) {
                data = this.motEquipmentData[i];
                break; // Stop the loop once the correct record is found
            }
        }
    
        if (!data) {
            console.error('Equipment record not found:', equipmentId);
            return;
        }
    
        console.log('show mot equipment details', data);
        document.getElementById(`mot_equipment_equipment_type_${this.id}`).value = data.equipment_type || '';
        document.getElementById(`mot_equipment_make_${this.id}`).value = data.make || '';
        document.getElementById(`mot_equipment_model_${this.id}`).value = data.model || '';
        document.getElementById(`mot_equipment_serial_no_${this.id}`).value = data.serial_no || '';
        document.getElementById(`mot_equipment_bay_${this.id}`).value = data.bay || '';
        document.getElementById(`mot_equipment_last_service_date_${this.id}`).value = data.last_service_date || '';
        document.getElementById(`mot_equipment_next_service_date_${this.id}`).value = data.next_service_date || '';
        document.getElementById(`mot_equipment_notes_${this.id}`).value = data.notes || '';
        document.getElementById(`motEquipmentRecordId`).value = data.id || '';
        // Display the modal
        document.getElementById('data-launch-mot-equipment-modal-box-popup').style.display = 'block';
    }
    
    
    






    //// MOT SITE AUDITS SUBGRID MODAL HANDLERS
    ///// SHOW NEW MODAL FOR BLANK RECORD
    showMotSiteAuditModal() {
        console.log('showmot site audit modal here')
        document.getElementById('motSiteAuditModal').style.display = 'block';
        document.getElementById('site_audit_consultant').value = '';
        document.getElementById('site_audit_auditor').value = '';
        document.getElementById('site_audit_auditDate').value = '';
        document.getElementById('siteAuditRecordId').value = '';
        
        // Front of House Compliance Section
        document.getElementById('site_audit_customerAreasAccessible').value = 'n/a';
        document.getElementById('site_audit_receptionClean').value = 'n/a';
        document.getElementById('site_audit_viewingAreaVisible').value = 'n/a';
        document.getElementById('site_audit_facilitiesClean').value = 'n/a';
        document.getElementById('site_audit_noticeBoardUpdated').value = 'n/a';
        document.getElementById('site_audit_examinerDetailsDisplayed').value = 'n/a';
        document.getElementById('site_audit_reducedRateFees').value = 'n/a';
        document.getElementById('site_audit_noticeBoardsVisible').value = 'n/a';
        document.getElementById('site_audit_vt9aCorrectInfo').value = 'n/a';
        document.getElementById('site_audit_openingHoursCorrect').value = 'n/a';
        document.getElementById('site_audit_workloadManagementSystem').value = 'n/a';
        document.getElementById('site_audit_managementSystemDemonstrable').value = 'n/a';
        document.getElementById('site_audit_adequateBookingSystem').value = 'n/a';
        document.getElementById('site_audit_recordsWithoutMot').value = 'n/a';
        document.getElementById('site_audit_emissionReportsMatch').value = 'n/a';
        document.getElementById('site_audit_handoverProcessEffective').value = 'n/a';
        document.getElementById('site_audit_documentationRetrievable').value = 'n/a';
        document.getElementById('site_audit_staffSuggestionsRecorded').value = 'n/a';
        document.getElementById('site_audit_followingCodesOfPractice').value = 'n/a';
        document.getElementById('site_audit_qualityManagementProcess').value = 'n/a';
        document.getElementById('site_audit_calibrationRecordsCorrect').value = 'n/a';
        document.getElementById('site_audit_dvsaFormsAvailable').value = 'n/a';
        document.getElementById('site_audit_equipmentManualsAvailable').value = 'n/a';
        
        // Tester and Staff Compliance Section
        document.getElementById('site_audit_specialNoticesAccessible').value = 'n/a';
        document.getElementById('site_audit_mattersOfTesting').value = 'n/a';
        document.getElementById('site_audit_motTestingGuide').value = 'n/a';
        document.getElementById('site_audit_correctNumberOfStaff').value = 'n/a';
        document.getElementById('site_audit_accessTesterInformation').value = 'n/a';
        document.getElementById('site_audit_bonusForMotTesting').value = 'n/a';
        document.getElementById('site_audit_otherIncentivesInfluence').value = 'n/a';
        document.getElementById('site_audit_qualityChecksRegular').value = 'n/a';
        document.getElementById('site_audit_dvsaTrainingRecords').value = 'n/a';
        document.getElementById('site_audit_cpdTrainingRecords').value = 'n/a';
        document.getElementById('site_audit_monitorTestLogs').value = 'n/a';
        document.getElementById('site_audit_passwordsLeftAvailable').value = 'n/a';
        document.getElementById('site_audit_fraudulentTests').value = 'n/a';
        
        // Equipment and Workshop Compliance Section
        document.getElementById('site_audit_baysMarked').value = 'n/a';
        document.getElementById('site_audit_baysAllowForTests').value = 'n/a';
        document.getElementById('site_audit_correctVehicleRegistered').value = 'n/a';
        document.getElementById('site_audit_workingAreasClean').value = 'n/a';
        document.getElementById('site_audit_housekeepingRegular').value = 'n/a';
        document.getElementById('site_audit_wasteStoredProperly').value = 'n/a';
        document.getElementById('site_audit_staffWorkingSafely').value = 'n/a';
        document.getElementById('site_audit_equipmentInGoodOrder').value = 'n/a';
        document.getElementById('site_audit_motBayLocationApparent').value = 'n/a';
        document.getElementById('site_audit_equipmentMaintained').value = 'n/a';
        document.getElementById('site_audit_maintenanceLogsKept').value = 'n/a';
        document.getElementById('site_audit_emissionReportsAvailable').value = 'n/a';
        
        // Tools in Working Order Section
        document.getElementById('site_audit_treadDepthGauge').value = 'n/a';
        document.getElementById('site_audit_inspectionLamp').value = 'n/a';
        document.getElementById('site_audit_pryPinchBars').value = 'n/a';
        document.getElementById('site_audit_corrosionTool').value = 'n/a';
        document.getElementById('site_audit_steelTapeMeasure').value = 'n/a';
        document.getElementById('site_audit_mirrorCameras').value = 'n/a';
        document.getElementById('site_audit_wheelChocks').value = 'n/a';
        document.getElementById('site_audit_brakePedalDepressor').value = 'n/a';
        document.getElementById('site_audit_trailerSocketTestingTool').value = 'n/a';
        document.getElementById('site_audit_leakDetectionSpray').value = 'n/a';
        document.getElementById('site_audit_oilTemperatureProbe').value = 'n/a';
        document.getElementById('site_audit_emissionReportSameFindings').value = '';
        document.getElementById('site_audit_siteAuditFindings').value = '';
        document.getElementById('site_audit_auditorPrint').value = '';
        
    }
    //// MOT SITE AUDITS SUBGRID MODAL HANDLERS
    ////// SHOW MODAL FOR EXISTING RECORD
    showMotSiteAuditDetails (id) {
        document.getElementById('motSiteAuditModal').style.display = 'block'    
        let record;
        for (let i = 0; i < this.motSiteAuditData.length; i++) {
            if (this.motSiteAuditData[i].id === parseInt(id)) {
                record = this.motSiteAuditData[i]
            }        
        }
        console.log('record is', record)
        // Populate the modal with the record data
        document.getElementById('site_audit_consultant').value = record.consultant || '';
        document.getElementById('site_audit_auditor').value = record.auditor || '';
        document.getElementById('site_audit_auditDate').value = record.date || '';
        document.getElementById('siteAuditRecordId').value = id

        // Front of House Compliance Section
        document.getElementById('site_audit_customerAreasAccessible').value = record.are_customer_areas_accessible || 'n/a';
        document.getElementById('site_audit_receptionClean').value = record.are_customer_reception_clean || 'n/a';
        document.getElementById('site_audit_viewingAreaVisible').value = record.can_customers_identify_viewing_area || 'n/a';
        document.getElementById('site_audit_facilitiesClean').value = record.are_customer_facilities_clean || 'n/a';
        document.getElementById('site_audit_noticeBoardUpdated').value = record.is_notice_board_up_to_date || 'n/a';
        document.getElementById('site_audit_examinerDetailsDisplayed').value = record.are_authorised_examiner_details_correct || 'n/a';
        document.getElementById('site_audit_reducedRateFees').value = record.are_test_fees_reduced || 'n/a';
        document.getElementById('site_audit_noticeBoardsVisible').value = record.are_notice_boards_visible || 'n/a';
        document.getElementById('site_audit_vt9aCorrectInfo').value = record.are_vt9a_parts_displayed || 'n/a';
        document.getElementById('site_audit_openingHoursCorrect').value = record.are_opening_hours_displayed_correctly || 'n/a';
        document.getElementById('site_audit_workloadManagementSystem').value = record.is_workload_management_system_appropriate || 'n/a';
        document.getElementById('site_audit_managementSystemDemonstrable').value = record.can_management_system_be_demonstrated || 'n/a';
        document.getElementById('site_audit_adequateBookingSystem').value = record.does_vts_have_booking_system || 'n/a';
        document.getElementById('site_audit_recordsWithoutMot').value = record.can_vts_provide_no_mot_records || 'n/a';
        document.getElementById('site_audit_emissionReportsMatch').value = record.can_emission_reports_be_matched || 'n/a';
        document.getElementById('site_audit_handoverProcessEffective').value = record.does_vts_have_handover_process || 'n/a';
        document.getElementById('site_audit_documentationRetrievable').value = record.is_documentation_easily_retrievable || 'n/a';
        document.getElementById('site_audit_staffSuggestionsRecorded').value = record.are_staff_suggestions_recorded || 'n/a';
        document.getElementById('site_audit_followingCodesOfPractice').value = record.are_codes_of_practice_followed || 'n/a';
        document.getElementById('site_audit_qualityManagementProcess').value = record.does_vts_have_quality_management_process || 'n/a';
        document.getElementById('site_audit_calibrationRecordsCorrect').value = record.are_calibration_records_correct || 'n/a';
        document.getElementById('site_audit_dvsaFormsAvailable').value = record.are_dvsa_forms_available || 'n/a';
        document.getElementById('site_audit_equipmentManualsAvailable').value = record.are_mot_equipment_manuals_available || 'n/a';

        // Tester and Staff Compliance Section
        document.getElementById('site_audit_specialNoticesAccessible').value = record.are_special_notices_accessible || 'n/a';
        document.getElementById('site_audit_mattersOfTesting').value = record.does_vts_employees_read_mot_blog || 'n/a';
        document.getElementById('site_audit_motTestingGuide').value = record.can_staff_reference_mot_testing_guide || 'n/a';
        document.getElementById('site_audit_correctNumberOfStaff').value = record.does_vts_have_correct_number_of_staff || 'n/a';
        document.getElementById('site_audit_accessTesterInformation').value = record.can_staff_access_mts_system || 'n/a';
        document.getElementById('site_audit_bonusForMotTesting').value = record.does_vts_offer_bonus_for_mot_testing || 'n/a';
        document.getElementById('site_audit_otherIncentivesInfluence').value = record.does_vts_offer_incentives_influencing_mot || 'n/a';
        document.getElementById('site_audit_qualityChecksRegular').value = record.are_mot_testers_quality_checked || 'n/a';
        document.getElementById('site_audit_dvsaTrainingRecords').value = record.does_vts_have_dvsa_training_records || 'n/a';
        document.getElementById('site_audit_cpdTrainingRecords').value = record.does_vts_have_cpd_training_records || 'n/a';
        document.getElementById('site_audit_monitorTestLogs').value = record.does_vts_monitor_test_logs || 'n/a';
        document.getElementById('site_audit_passwordsLeftAvailable').value = record.have_tester_passwords_been_compromised || 'n/a';
        document.getElementById('site_audit_fraudulentTests').value = record.are_there_indications_of_fraud || 'n/a';

        // Equipment and Workshop Compliance Section
        document.getElementById('site_audit_baysMarked').value = record.are_mot_bays_clearly_marked || 'n/a';
        document.getElementById('site_audit_baysAllowForTests').value = record.do_bays_support_test_volume || 'n/a';
        document.getElementById('site_audit_correctVehicleRegistered').value = record.is_correct_vehicle_registered_on_mts || 'n/a';
        document.getElementById('site_audit_workingAreasClean').value = record.are_working_areas_clean_hazard_free || 'n/a';
        document.getElementById('site_audit_housekeepingRegular').value = record.does_regular_housekeeping_occur || 'n/a';
        document.getElementById('site_audit_wasteStoredProperly').value = record.are_waste_and_recyclables_stored_properly || 'n/a';
        document.getElementById('site_audit_staffWorkingSafely').value = record.do_staff_work_safely || 'n/a';
        document.getElementById('site_audit_equipmentInGoodOrder').value = record.is_workshop_equipment_in_good_order || 'n/a';
        document.getElementById('site_audit_motBayLocationApparent').value = record.is_mot_bay_location_apparent || 'n/a';
        document.getElementById('site_audit_equipmentMaintained').value = record.does_vts_maintain_equipment || 'n/a';
        document.getElementById('site_audit_maintenanceLogsKept').value = record.are_maintenance_logs_kept || 'n/a';
        document.getElementById('site_audit_emissionReportsAvailable').value = record.does_vts_have_recent_emission_reports || 'n/a';

        // Tools in Working Order Section
        document.getElementById('site_audit_treadDepthGauge').value = record.tread_depth_gauge || 'n/a';
        document.getElementById('site_audit_inspectionLamp').value = record.inspection_lamp || 'n/a';
        document.getElementById('site_audit_pryPinchBars').value = record.pry_pinch_bars || 'n/a';
        document.getElementById('site_audit_corrosionTool').value = record.corrosion_assessment_tool || 'n/a';
        document.getElementById('site_audit_steelTapeMeasure').value = record.steel_tape_measure || 'n/a';
        document.getElementById('site_audit_mirrorCameras').value = record.mirrors_or_cameras_for_lights_check || 'n/a';
        document.getElementById('site_audit_wheelChocks').value = record.wheel_chocks || 'n/a';
        document.getElementById('site_audit_brakePedalDepressor').value = record.brake_pedal_depressor || 'n/a';
        document.getElementById('site_audit_trailerSocketTestingTool').value = record.trailer_socket_testing_tool || 'n/a';
        document.getElementById('site_audit_leakDetectionSpray').value = record.leak_detection_spray || 'n/a';
        document.getElementById('site_audit_oilTemperatureProbe').value = record.oil_temperature_probe || 'n/a';
        document.getElementById('site_audit_emissionReportSameFindings').value = record.emission_report_same_findings || '';
        document.getElementById('site_audit_siteAuditFindings').value = record.site_audit_findings || '';
        document.getElementById('site_audit_auditorPrint').value = record.auditor_print || '';

    }
    //// MOT SITE AUDITS SUBGRID MODAL HANDLERS
    ///// SAVE NEW OR EXISTING RECORD FOR MOT SITE AUDITS
    saveNewMotAuditRecord () {
        // const garageId = document.getElementById('garageId').value;
        // Gathering data from the modal form
        const consultant = document.getElementById('site_audit_consultant').value;
        const auditor = document.getElementById('site_audit_auditor').value;
        const date = document.getElementById('site_audit_auditDate').value;

        const motAuditRecordId = document.getElementById('siteAuditRecordId').value

        // Front of House Compliance Section
        const are_customer_areas_accessible = document.getElementById('site_audit_customerAreasAccessible').value;
        const are_customer_reception_clean = document.getElementById('site_audit_receptionClean').value;
        const can_customers_identify_viewing_area = document.getElementById('site_audit_viewingAreaVisible').value;
        const are_customer_facilities_clean = document.getElementById('site_audit_facilitiesClean').value;
        const is_notice_board_up_to_date = document.getElementById('site_audit_noticeBoardUpdated').value;
        const are_authorised_examiner_details_correct = document.getElementById('site_audit_examinerDetailsDisplayed').value;
        const are_test_fees_reduced = document.getElementById('site_audit_reducedRateFees').value;
        const are_notice_boards_visible = document.getElementById('site_audit_noticeBoardsVisible').value;
        const are_vt9a_parts_displayed = document.getElementById('site_audit_vt9aCorrectInfo').value;
        const are_opening_hours_displayed_correctly = document.getElementById('site_audit_openingHoursCorrect').value;
        const is_workload_management_system_appropriate = document.getElementById('site_audit_workloadManagementSystem').value;
        const can_management_system_be_demonstrated = document.getElementById('site_audit_managementSystemDemonstrable').value;
        const does_vts_have_booking_system = document.getElementById('site_audit_adequateBookingSystem').value;
        const can_vts_provide_no_mot_records = document.getElementById('site_audit_recordsWithoutMot').value;
        const can_emission_reports_be_matched = document.getElementById('site_audit_emissionReportsMatch').value;
        const does_vts_have_handover_process = document.getElementById('site_audit_handoverProcessEffective').value;
        const is_documentation_easily_retrievable = document.getElementById('site_audit_documentationRetrievable').value;
        const are_staff_suggestions_recorded = document.getElementById('site_audit_staffSuggestionsRecorded').value;
        const are_codes_of_practice_followed = document.getElementById('site_audit_followingCodesOfPractice').value;
        const does_vts_have_quality_management_process = document.getElementById('site_audit_qualityManagementProcess').value;
        const are_calibration_records_correct = document.getElementById('site_audit_calibrationRecordsCorrect').value;
        const are_dvsa_forms_available = document.getElementById('site_audit_dvsaFormsAvailable').value;
        const are_mot_equipment_manuals_available = document.getElementById('site_audit_equipmentManualsAvailable').value;

        // Tester and Staff Compliance Section
        const are_special_notices_accessible = document.getElementById('site_audit_specialNoticesAccessible').value;
        const does_vts_employees_read_mot_blog = document.getElementById('site_audit_mattersOfTesting').value;
        const can_staff_reference_mot_testing_guide = document.getElementById('site_audit_motTestingGuide').value;
        const does_vts_have_correct_number_of_staff = document.getElementById('site_audit_correctNumberOfStaff').value;
        const can_staff_access_mts_system = document.getElementById('site_audit_accessTesterInformation').value;
        const does_vts_offer_bonus_for_mot_testing = document.getElementById('site_audit_bonusForMotTesting').value;
        const does_vts_offer_incentives_influencing_mot = document.getElementById('site_audit_otherIncentivesInfluence').value;
        const are_mot_testers_quality_checked = document.getElementById('site_audit_qualityChecksRegular').value;
        const does_vts_have_dvsa_training_records = document.getElementById('site_audit_dvsaTrainingRecords').value;
        const does_vts_have_cpd_training_records = document.getElementById('site_audit_cpdTrainingRecords').value;
        const does_vts_monitor_test_logs = document.getElementById('site_audit_monitorTestLogs').value;
        const have_tester_passwords_been_compromised = document.getElementById('site_audit_passwordsLeftAvailable').value;
        const are_there_indications_of_fraud = document.getElementById('site_audit_fraudulentTests').value;

        // Equipment and Workshop Compliance Section
        const are_mot_bays_clearly_marked = document.getElementById('site_audit_baysMarked').value;
        const do_bays_support_test_volume = document.getElementById('site_audit_baysAllowForTests').value;
        const is_correct_vehicle_registered_on_mts = document.getElementById('site_audit_correctVehicleRegistered').value;
        const are_working_areas_clean_hazard_free = document.getElementById('site_audit_workingAreasClean').value;
        const does_regular_housekeeping_occur = document.getElementById('site_audit_housekeepingRegular').value;
        const are_waste_and_recyclables_stored_properly = document.getElementById('site_audit_wasteStoredProperly').value;
        const do_staff_work_safely = document.getElementById('site_audit_staffWorkingSafely').value;
        const is_workshop_equipment_in_good_order = document.getElementById('site_audit_equipmentInGoodOrder').value;
        const is_mot_bay_location_apparent = document.getElementById('site_audit_motBayLocationApparent').value;
        const does_vts_maintain_equipment = document.getElementById('site_audit_equipmentMaintained').value;
        const are_maintenance_logs_kept = document.getElementById('site_audit_maintenanceLogsKept').value;
        const does_vts_have_recent_emission_reports = document.getElementById('site_audit_emissionReportsAvailable').value;

        // Tools in Working Order Section
        const tread_depth_gauge = document.getElementById('site_audit_treadDepthGauge').value;
        const inspection_lamp = document.getElementById('site_audit_inspectionLamp').value;
        const pry_pinch_bars = document.getElementById('site_audit_pryPinchBars').value;
        const corrosion_assessment_tool = document.getElementById('site_audit_corrosionTool').value;
        const steel_tape_measure = document.getElementById('site_audit_steelTapeMeasure').value;
        const mirrors_or_cameras_for_light_check = document.getElementById('site_audit_mirrorCameras').value;
        const wheel_chocks = document.getElementById('site_audit_wheelChocks').value;
        const brake_pedal_depressor = document.getElementById('site_audit_brakePedalDepressor').value;
        const trailer_socket_testing_tool = document.getElementById('site_audit_trailerSocketTestingTool').value;
        const leak_detection_spray = document.getElementById('site_audit_leakDetectionSpray').value;
        const oil_temperature_probe = document.getElementById('site_audit_oilTemperatureProbe').value;
        const emission_report_same_findings = document.getElementById('site_audit_emissionReportSameFindings').value;
        const site_audit_findings = document.getElementById('site_audit_siteAuditFindings').value;
        const auditor_print = document.getElementById('site_audit_auditorPrint').value;

        // Creating the object to send to the server
        const motSiteAuditData = {
            garage_id: this.id,
            consultant,
            auditor,
            date,
            are_customer_areas_accessible,
            are_customer_reception_clean,
            can_customers_identify_viewing_area,
            are_customer_facilities_clean,
            is_notice_board_up_to_date,
            are_authorised_examiner_details_correct,
            are_test_fees_reduced,
            are_notice_boards_visible,
            are_vt9a_parts_displayed,
            are_opening_hours_displayed_correctly,
            is_workload_management_system_appropriate,
            can_management_system_be_demonstrated,
            does_vts_have_booking_system,
            can_vts_provide_no_mot_records,
            can_emission_reports_be_matched,
            does_vts_have_handover_process,
            is_documentation_easily_retrievable,
            are_staff_suggestions_recorded,
            are_codes_of_practice_followed,
            does_vts_have_quality_management_process,
            are_calibration_records_correct,
            are_dvsa_forms_available,
            are_mot_equipment_manuals_available,
            are_special_notices_accessible,
            does_vts_employees_read_mot_blog,
            can_staff_reference_mot_testing_guide,
            does_vts_have_correct_number_of_staff,
            can_staff_access_mts_system,
            does_vts_offer_bonus_for_mot_testing,
            does_vts_offer_incentives_influencing_mot,
            are_mot_testers_quality_checked,
            does_vts_have_dvsa_training_records,
            does_vts_have_cpd_training_records,
            does_vts_monitor_test_logs,
            have_tester_passwords_been_compromised,
            are_there_indications_of_fraud,
            are_mot_bays_clearly_marked,
            do_bays_support_test_volume,
            is_correct_vehicle_registered_on_mts,
            are_working_areas_clean_hazard_free,
            does_regular_housekeeping_occur,
            are_waste_and_recyclables_stored_properly,
            do_staff_work_safely,
            is_workshop_equipment_in_good_order,
            is_mot_bay_location_apparent,
            does_vts_maintain_equipment,
            are_maintenance_logs_kept,
            does_vts_have_recent_emission_reports,
            tread_depth_gauge,
            inspection_lamp,
            pry_pinch_bars,
            corrosion_assessment_tool,
            steel_tape_measure,
            mirrors_or_cameras_for_light_check,
            wheel_chocks,
            brake_pedal_depressor,
            trailer_socket_testing_tool,
            leak_detection_spray,
            oil_temperature_probe,
            emission_report_same_findings,
            site_audit_findings,
            auditor_print,
        };

        // Debugging
        console.log('motSiteAuditData  ', motSiteAuditData);


        console.log('motAuditRecordId  ', motAuditRecordId);
        if (motAuditRecordId === "") {
            // Sending the data to the server
                createRecord('data_launch_mot_site_audits', motSiteAuditData).then(res => {
                    console.log('data_launch_mot_site_audits res', res);
                    this.injectDataIntoMotSiteAuditsSubgrid()
                }, err => { 
                    console.error(err); 
            });
        }
        else {
                updateRecord('data_launch_mot_site_audits',motAuditRecordId,  motSiteAuditData).then(res => {
                    console.log('data_launch_mot_site_audits res', res);
                    for (let i = 0; i < this.motSiteAuditData.length; i++) {
                        if (this.motSiteAuditData[i].id=== parseInt(motAuditRecordId)) {
                            this.motSiteAuditData[i] = res
                        }        
                    }
                    this.injectDataIntoMotSiteAuditsSubgrid()
                }, err => { 
                    console.error(err); 
            });
        }
    }





    /// QC CHECKERS MODAL SUBGRID
    //// SHOW NEW MODAL FOR BLANK NEW RECORD
    showQcCheckersModal () {
        document.getElementById('qcCheckerModal').style.display = 'block'
        document.getElementById('data_launch_qc_checkers_for_cars_testerName').value = '';
        document.getElementById('data_launch_qc_checkers_for_cars_testerID').value = '';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleReg').value = '';
        document.getElementById('data_launch_qc_checkers_for_cars_dateOfQC').value = '';
        document.getElementById('data_launch_qc_checkers_for_cars_qcCarriedOutBy').value = '';
        document.getElementById('data_launch_qc_checkers_for_cars_consultant').value = '';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleClass').value = '';
        document.getElementById('qcCheckerRecordId').value = '';
        
        document.getElementById('data_launch_qc_checkers_for_cars_doorsOpen').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_bonnetOpens').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_bootOpens').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_fuelCapOpens').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_chassisNumberTaken').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_conditionOfRegistrationPlate').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleSafeForTest').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleCorrectlyRegistered').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakePedalServoOperation').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_passengerDoorOpens').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_allPassengerSeatsChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_allMandatoryMirrorsChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_handbrakeOperationChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_steeringUJChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_steeringFreePlayChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_steeringAntiTheftLockChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_audibleWarningChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_washersWipersChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_seatbeltsChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleCorrectlyEnteredEmissionMachine').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_correctEmissionStandardsApplied').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntSelectCorrectEmissionLimits').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_oilLevelChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntCorrectlyUsesBeamSetter').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_headlampAimChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_headlampUnitsSecure').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_rearLightUnitsSecure').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_lightsInterfereWithAnother').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntUsesMethodicalProcess').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_steeringSecurityChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_batterySecure').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeSystemInspectedUnderPressure').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_allFluidLevelsInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_fuelSystemInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_generalConditionInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_steeringInspectedUsingEquipment').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeSystemInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_exhaustChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_driveshaftInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_fuelSystemInspectedWhileRunning').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_suspensionComponentsInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_undersideInspectedForCorrosion').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleRaisedCorrectly').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleRaisedToHalfHeight').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_tyresInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_suspensionComponentsChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeHosesInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_allGaitersInspected').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_wheelSecurityAssessed').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeComponentsAssessed').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntUsedATL').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_conditionOfTurnPlates').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntCanUseTurnPlates').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_turnPlatesUsedForLockCheck').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_frontAxleBrakePerformance').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_rearAxleBrakePerformance').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_emergencyBrakePerformance').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeBindReleaseCheck').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeJudderAssessed').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_notes').value = '';
        document.getElementById('data_launch_qc_checkers_for_cars_tqiChecked').value = 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_confirmedByTester').value = '';        
    }
    //// QC CHECKERS MODAL SUBGRID
    ///// SHOW MODAL FOR EXISTING RECORDS
    showQcCheckersDetails(id) {
        document.getElementById('qcCheckerModal').style.display = 'block'    
        let record;
        for (let i = 0; i < this.qcCheckerData.length; i++) {
            if (this.qcCheckerData[i].id === parseInt(id)) {
                record = this.qcCheckerData[i]
            }        
        }
        document.getElementById('data_launch_qc_checkers_for_cars_testerName').value = record.tester_name || '';
        document.getElementById('data_launch_qc_checkers_for_cars_testerID').value = record.tester_id || '';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleReg').value = record.vehicle_reg || '';
        document.getElementById('data_launch_qc_checkers_for_cars_dateOfQC').value = record.date_of_qc || '';
        document.getElementById('data_launch_qc_checkers_for_cars_qcCarriedOutBy').value = record.qc_carried_out_by || '';
        document.getElementById('data_launch_qc_checkers_for_cars_consultant').value = record.consultant || '';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleClass').value = record.vehicle_class || '';
        document.getElementById('qcCheckerRecordId').value = record.id || '';
        
        // Pre Checks Section
        document.getElementById('data_launch_qc_checkers_for_cars_doorsOpen').value = record.all_required_doors_open || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_bonnetOpens').value = record.bonnet_opens_as_required || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_bootOpens').value = record.boot_opens_as_required || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_fuelCapOpens').value = record.fuel_cap_opens || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_chassisNumberTaken').value = record.chassis_number_taken || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_conditionOfRegistrationPlate').value = record.condition_of_registration_plate || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleSafeForTest').value = record.vehicle_safe_for_test || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleCorrectlyRegistered').value = record.presented_vehicle_correctly_registered || 'n/a';
        
        // Inside Vehicle Section
        document.getElementById('data_launch_qc_checkers_for_cars_brakePedalServoOperation').value = record.brake_pedal_servo_operation_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_passengerDoorOpens').value = record.passenger_door_opens || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_allPassengerSeatsChecked').value = record.all_passenger_seats_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_allMandatoryMirrorsChecked').value = record.all_mandatory_mirrors_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_handbrakeOperationChecked').value = record.handbrake_operation_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_steeringUJChecked').value = record.steering_uj_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_steeringFreePlayChecked').value = record.steering_free_play_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_steeringAntiTheftLockChecked').value = record.steering_anti_theft_lock_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_audibleWarningChecked').value = record.audible_warning_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_washersWipersChecked').value = record.all_washers_wipers_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_seatbeltsChecked').value = record.seatbelts_checked || 'n/a';
        
        // Gas Analysis / Diesel Smoke Test Section
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleCorrectlyEnteredEmissionMachine').value = record.vehicle_correctly_entered_emission_machine || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_correctEmissionStandardsApplied').value = record.correct_emission_standards_applied || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntSelectCorrectEmissionLimits').value = record.nt_select_correct_emission_limits || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_oilLevelChecked').value = record.oil_level_checked || 'n/a';
        
        // Vehicle Light Section
        document.getElementById('data_launch_qc_checkers_for_cars_ntCorrectlyUsesBeamSetter').value = record.nt_correctly_uses_beam_setter || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_headlampAimChecked').value = record.headlamp_aim_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_headlampUnitsSecure').value = record.headlamp_units_secure || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_rearLightUnitsSecure').value = record.rear_light_units_secure || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_lightsInterfereWithAnother').value = record.lights_interfere_with_another || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntUsesMethodicalProcess').value = record.nt_uses_methodical_process || 'n/a';
        
        // Bonnet Open Section
        document.getElementById('data_launch_qc_checkers_for_cars_steeringSecurityChecked').value = record.steering_security_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_batterySecure').value = record.battery_secure || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeSystemInspectedUnderPressure').value = record.brake_system_inspected_under_pressure || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_allFluidLevelsInspected').value = record.all_fluid_levels_inspected || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_fuelSystemInspected').value = record.fuel_system_inspected || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_generalConditionInspected').value = record.general_condition_inspected || 'n/a';
        
        // Vehicle raised to full height Section
        document.getElementById('data_launch_qc_checkers_for_cars_steeringInspectedUsingEquipment').value = record.steering_inspected_using_equipment || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeSystemInspected').value = record.brake_system_inspected || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_exhaustChecked').value = record.exhaust_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_driveshaftInspected').value = record.driveshaft_inspected || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_fuelSystemInspectedWhileRunning').value = record.fuel_system_inspected_while_running || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_suspensionComponentsInspected').value = record.suspension_components_inspected || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_undersideInspectedForCorrosion').value = record.underside_inspected_for_corrosion || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_vehicleRaisedCorrectly').value = record.vehicle_raised_correctly || 'n/a';
        
        // Vehicle Raised to half height Section
        document.getElementById('data_launch_qc_checkers_for_cars_tyresInspected').value = record.tyres_inspected || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_suspensionComponentsChecked').value = record.suspension_components_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeHosesInspected').value = record.brake_hoses_inspected || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_allGaitersInspected').value = record.all_gaiters_inspected || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_wheelSecurityAssessed').value = record.wheel_security_assessed || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeComponentsAssessed').value = record.brake_components_assessed || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntUsedATL').value = record.nt_used_atl || 'n/a';
        
        // Use of turn plates Section
        document.getElementById('data_launch_qc_checkers_for_cars_conditionOfTurnPlates').value = record.condition_of_turn_plates || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_ntCanUseTurnPlates').value = record.nt_can_use_turn_plates || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_turnPlatesUsedForLockCheck').value = record.turn_plates_used_for_lock_check || 'n/a';
        
        // Brake Performance Test Section
        document.getElementById('data_launch_qc_checkers_for_cars_frontAxleBrakePerformance').value = record.front_axle_brake_performance || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_rearAxleBrakePerformance').value = record.rear_axle_brake_performance || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_emergencyBrakePerformance').value = record.emergency_brake_performance || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeBindReleaseCheck').value = record.brake_bind_release_check || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_brakeJudderAssessed').value = record.brake_judder_assessed || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_notes').value = record.notes || '';
        document.getElementById('data_launch_qc_checkers_for_cars_tqiChecked').value = record.tqi_checked || 'n/a';
        document.getElementById('data_launch_qc_checkers_for_cars_confirmedByTester').value = record.confirmed_by_tester || '';        
    }
    ///// QC CHECKERS MODAL SUBGRID
    ////// SAVE NEW OR EXISTING RECORD TO QC CHECKERS
    saveNewQcCheckersRecord() {
        // Gathering data from the modal form
        const testerName = document.getElementById('data_launch_qc_checkers_for_cars_testerName').value;
        const testerID = document.getElementById('data_launch_qc_checkers_for_cars_testerID').value;
        const vehicleReg = document.getElementById('data_launch_qc_checkers_for_cars_vehicleReg').value;
        const dateOfQC = document.getElementById('data_launch_qc_checkers_for_cars_dateOfQC').value;
        const qcCarriedOutBy = document.getElementById('data_launch_qc_checkers_for_cars_qcCarriedOutBy').value;
        const consultant = document.getElementById('data_launch_qc_checkers_for_cars_consultant').value;
        const vehicleClass = document.getElementById('data_launch_qc_checkers_for_cars_vehicleClass').value;
        const qcCheckerRecordId = document.getElementById('qcCheckerRecordId').value;
        
        // Pre Checks Section
        const doorsOpen = document.getElementById('data_launch_qc_checkers_for_cars_doorsOpen').value;
        const bonnetOpens = document.getElementById('data_launch_qc_checkers_for_cars_bonnetOpens').value;
        const bootOpens = document.getElementById('data_launch_qc_checkers_for_cars_bootOpens').value;
        const fuelCapOpens = document.getElementById('data_launch_qc_checkers_for_cars_fuelCapOpens').value;
        const chassisNumberTaken = document.getElementById('data_launch_qc_checkers_for_cars_chassisNumberTaken').value;
        const conditionOfRegistrationPlate = document.getElementById('data_launch_qc_checkers_for_cars_conditionOfRegistrationPlate').value;
        const vehicleSafeForTest = document.getElementById('data_launch_qc_checkers_for_cars_vehicleSafeForTest').value;
        const vehicleCorrectlyRegistered = document.getElementById('data_launch_qc_checkers_for_cars_vehicleCorrectlyRegistered').value;
        
        // Inside Vehicle Section
        const brakePedalServoOperation = document.getElementById('data_launch_qc_checkers_for_cars_brakePedalServoOperation').value;
        const passengerDoorOpens = document.getElementById('data_launch_qc_checkers_for_cars_passengerDoorOpens').value;
        const allPassengerSeatsChecked = document.getElementById('data_launch_qc_checkers_for_cars_allPassengerSeatsChecked').value;
        const allMandatoryMirrorsChecked = document.getElementById('data_launch_qc_checkers_for_cars_allMandatoryMirrorsChecked').value;
        const handbrakeOperationChecked = document.getElementById('data_launch_qc_checkers_for_cars_handbrakeOperationChecked').value;
        const steeringUJChecked = document.getElementById('data_launch_qc_checkers_for_cars_steeringUJChecked').value;
        const steeringFreePlayChecked = document.getElementById('data_launch_qc_checkers_for_cars_steeringFreePlayChecked').value;
        const steeringAntiTheftLockChecked = document.getElementById('data_launch_qc_checkers_for_cars_steeringAntiTheftLockChecked').value;
        const audibleWarningChecked = document.getElementById('data_launch_qc_checkers_for_cars_audibleWarningChecked').value;
        const washersWipersChecked = document.getElementById('data_launch_qc_checkers_for_cars_washersWipersChecked').value;
        const seatbeltsChecked = document.getElementById('data_launch_qc_checkers_for_cars_seatbeltsChecked').value;
        
        // Gas Analysis / Diesel Smoke Test Section
        const vehicleCorrectlyEnteredEmissionMachine = document.getElementById('data_launch_qc_checkers_for_cars_vehicleCorrectlyEnteredEmissionMachine').value;
        const correctEmissionStandardsApplied = document.getElementById('data_launch_qc_checkers_for_cars_correctEmissionStandardsApplied').value;
        const ntSelectCorrectEmissionLimits = document.getElementById('data_launch_qc_checkers_for_cars_ntSelectCorrectEmissionLimits').value;
        const oilLevelChecked = document.getElementById('data_launch_qc_checkers_for_cars_oilLevelChecked').value;
        
        // Vehicle Light Section
        const ntCorrectlyUsesBeamSetter = document.getElementById('data_launch_qc_checkers_for_cars_ntCorrectlyUsesBeamSetter').value;
        const headlampAimChecked = document.getElementById('data_launch_qc_checkers_for_cars_headlampAimChecked').value;
        const headlampUnitsSecure = document.getElementById('data_launch_qc_checkers_for_cars_headlampUnitsSecure').value;
        const rearLightUnitsSecure = document.getElementById('data_launch_qc_checkers_for_cars_rearLightUnitsSecure').value;
        const lightsInterfereWithAnother = document.getElementById('data_launch_qc_checkers_for_cars_lightsInterfereWithAnother').value;
        const ntUsesMethodicalProcess = document.getElementById('data_launch_qc_checkers_for_cars_ntUsesMethodicalProcess').value;
        
        // Bonnet Open Section
        const steeringSecurityChecked = document.getElementById('data_launch_qc_checkers_for_cars_steeringSecurityChecked').value;
        const batterySecure = document.getElementById('data_launch_qc_checkers_for_cars_batterySecure').value;
        const brakeSystemInspectedUnderPressure = document.getElementById('data_launch_qc_checkers_for_cars_brakeSystemInspectedUnderPressure').value;
        const allFluidLevelsInspected = document.getElementById('data_launch_qc_checkers_for_cars_allFluidLevelsInspected').value;
        const fuelSystemInspected = document.getElementById('data_launch_qc_checkers_for_cars_fuelSystemInspected').value;
        const generalConditionInspected = document.getElementById('data_launch_qc_checkers_for_cars_generalConditionInspected').value;
        
        // Vehicle raised to full height Section
        const steeringInspectedUsingEquipment = document.getElementById('data_launch_qc_checkers_for_cars_steeringInspectedUsingEquipment').value;
        const brakeSystemInspected = document.getElementById('data_launch_qc_checkers_for_cars_brakeSystemInspected').value;
        const exhaustChecked = document.getElementById('data_launch_qc_checkers_for_cars_exhaustChecked').value;
        const driveshaftInspected = document.getElementById('data_launch_qc_checkers_for_cars_driveshaftInspected').value;
        const fuelSystemInspectedWhileRunning = document.getElementById('data_launch_qc_checkers_for_cars_fuelSystemInspectedWhileRunning').value;
        const suspensionComponentsInspected = document.getElementById('data_launch_qc_checkers_for_cars_suspensionComponentsInspected').value;
        const undersideInspectedForCorrosion = document.getElementById('data_launch_qc_checkers_for_cars_undersideInspectedForCorrosion').value;
        const vehicleRaisedCorrectly = document.getElementById('data_launch_qc_checkers_for_cars_vehicleRaisedCorrectly').value;
        
        // Vehicle Raised to half height Section
        const tyresInspected = document.getElementById('data_launch_qc_checkers_for_cars_tyresInspected').value;
        const suspensionComponentsChecked = document.getElementById('data_launch_qc_checkers_for_cars_suspensionComponentsChecked').value;
        const brakeHosesInspected = document.getElementById('data_launch_qc_checkers_for_cars_brakeHosesInspected').value;
        const allGaitersInspected = document.getElementById('data_launch_qc_checkers_for_cars_allGaitersInspected').value;
        const wheelSecurityAssessed = document.getElementById('data_launch_qc_checkers_for_cars_wheelSecurityAssessed').value;
        const brakeComponentsAssessed = document.getElementById('data_launch_qc_checkers_for_cars_brakeComponentsAssessed').value;
        const ntUsedATL = document.getElementById('data_launch_qc_checkers_for_cars_ntUsedATL').value;
        
        // Use of turn plates Section
        const conditionOfTurnPlates = document.getElementById('data_launch_qc_checkers_for_cars_conditionOfTurnPlates').value;
        const ntCanUseTurnPlates = document.getElementById('data_launch_qc_checkers_for_cars_ntCanUseTurnPlates').value;
        const turnPlatesUsedForLockCheck = document.getElementById('data_launch_qc_checkers_for_cars_turnPlatesUsedForLockCheck').value;
        
        // Brake Performance Test Section
        const frontAxleBrakePerformance = document.getElementById('data_launch_qc_checkers_for_cars_frontAxleBrakePerformance').value;
        const rearAxleBrakePerformance = document.getElementById('data_launch_qc_checkers_for_cars_rearAxleBrakePerformance').value;
        const emergencyBrakePerformance = document.getElementById('data_launch_qc_checkers_for_cars_emergencyBrakePerformance').value;
        const brakeBindReleaseCheck = document.getElementById('data_launch_qc_checkers_for_cars_brakeBindReleaseCheck').value;
        const brakeJudderAssessed = document.getElementById('data_launch_qc_checkers_for_cars_brakeJudderAssessed').value;
        const notes = document.getElementById('data_launch_qc_checkers_for_cars_notes').value;
        const tqiChecked = document.getElementById('data_launch_qc_checkers_for_cars_tqiChecked').value;
        const confirmedByTester = document.getElementById('data_launch_qc_checkers_for_cars_confirmedByTester').value;
        

        // Creating the object to send to the server
        const qcCheckerData = {
            garage_id: this.id,
            tester_name: testerName,
            tester_id: testerID,
            vehicle_reg: vehicleReg,
            date_of_qc: dateOfQC,
            qc_carried_out_by: qcCarriedOutBy,
            consultant: consultant,
            vehicle_class: vehicleClass,
            all_required_doors_open: doorsOpen,
            bonnet_opens_as_required: bonnetOpens,
            boot_opens_as_required: bootOpens,
            fuel_cap_opens: fuelCapOpens,
            chassis_number_taken: chassisNumberTaken,
            condition_of_registration_plate: conditionOfRegistrationPlate,
            vehicle_safe_for_test: vehicleSafeForTest,
            presented_vehicle_correctly_registered: vehicleCorrectlyRegistered,
            brake_pedal_servo_operation_checked: brakePedalServoOperation,
            passenger_door_opens: passengerDoorOpens,
            all_passenger_seats_checked: allPassengerSeatsChecked,
            all_mandatory_mirrors_checked: allMandatoryMirrorsChecked,
            handbrake_operation_checked: handbrakeOperationChecked,
            steering_uj_checked: steeringUJChecked,
            steering_free_play_checked: steeringFreePlayChecked,
            steering_anti_theft_lock_checked: steeringAntiTheftLockChecked,
            audible_warning_checked: audibleWarningChecked,
            all_washers_wipers_checked: washersWipersChecked,
            seatbelts_checked: seatbeltsChecked,
            vehicle_correctly_entered_emission_machine: vehicleCorrectlyEnteredEmissionMachine,
            correct_emission_standards_applied: correctEmissionStandardsApplied,
            nt_select_correct_emission_limits: ntSelectCorrectEmissionLimits,
            oil_level_checked: oilLevelChecked,
            nt_correctly_uses_beam_setter: ntCorrectlyUsesBeamSetter,
            headlamp_aim_checked: headlampAimChecked,
            headlamp_units_secure: headlampUnitsSecure,
            rear_light_units_secure: rearLightUnitsSecure,
            lights_interfere_with_another: lightsInterfereWithAnother,
            nt_uses_methodical_process: ntUsesMethodicalProcess,
            steering_security_checked: steeringSecurityChecked,
            battery_secure: batterySecure,
            brake_system_inspected_under_pressure: brakeSystemInspectedUnderPressure,
            all_fluid_levels_inspected: allFluidLevelsInspected,
            fuel_system_inspected: fuelSystemInspected,
            general_condition_inspected: generalConditionInspected,
            steering_inspected_using_equipment: steeringInspectedUsingEquipment,
            brake_system_inspected: brakeSystemInspected,
            exhaust_checked: exhaustChecked,
            driveshaft_inspected: driveshaftInspected,
            fuel_system_inspected_while_running: fuelSystemInspectedWhileRunning,
            suspension_components_inspected: suspensionComponentsInspected,
            underside_inspected_for_corrosion: undersideInspectedForCorrosion,
            vehicle_raised_correctly: vehicleRaisedCorrectly,
            tyres_inspected: tyresInspected,
            suspension_components_checked: suspensionComponentsChecked,
            brake_hoses_inspected: brakeHosesInspected,
            all_gaiters_inspected: allGaitersInspected,
            wheel_security_assessed: wheelSecurityAssessed,
            brake_components_assessed: brakeComponentsAssessed,
            nt_used_atl: ntUsedATL,
            condition_of_turn_plates: conditionOfTurnPlates,
            nt_can_use_turn_plates: ntCanUseTurnPlates,
            turn_plates_used_for_lock_check: turnPlatesUsedForLockCheck,
            front_axle_brake_performance: frontAxleBrakePerformance,
            rear_axle_brake_performance: rearAxleBrakePerformance,
            emergency_brake_performance: emergencyBrakePerformance,
            brake_bind_release_check: brakeBindReleaseCheck,
            brake_judder_assessed: brakeJudderAssessed,
            notes: notes,
            tqi_checked: tqiChecked,
            confirmed_by_tester: confirmedByTester,
        };

        // Debugging
        console.log('qcCheckerData  ', qcCheckerData);

        console.log('qcCheckerRecordId  ', qcCheckerRecordId);
        if (qcCheckerRecordId === "") {
            // Sending the data to the server
                createRecord('data_launch_qc_checkers_for_car', qcCheckerData).then(res => {
                    console.log('data_launch_qc_checkers_for_car res', res);
                    this.injectDataIntoQcCheckersSubgrid()
                }, err => { 
                    console.error(err); 
            });
        }
        else {
                let recordId = parseInt(qcCheckerRecordId)
                qcCheckerData.id = recordId
                updateRecord('data_launch_qc_checkers_for_car', recordId,  qcCheckerData).then(res => {
                    console.log('data_launch_qc_checkers_for_car res', res);
                    for (let i = 0; i < this.qcCheckerData.length; i++) {
                        if (this.qcCheckerData[i].id=== parseInt(qcCheckerRecordId)) {
                            this.qcCheckerData[i] = res
                        }        
                    }
                    this.injectDataIntoQcCheckersSubgrid()
                }, err => { 
                    console.error(err); 
            });
        }
    }





    /// QC CHECKERS FOR BIKE MODAL SUBGRID
    //// SHOW NEW MODAL FOR BLANK RECORD
    showQcCheckersForBikeModal() {
        document.getElementById('qcCheckerForBikeModal').style.display = 'block';
        
        // Reset fields
        document.getElementById('testerName').value = '';
        document.getElementById('testerID').value = '';
        document.getElementById('vehicleReg').value = '';
        document.getElementById('dateOfQC_bikes').value = '';
        document.getElementById('qcCarriedOutBy').value = '';
        document.getElementById('vehicleClass').value = '';
        document.getElementById('nameQCChecker').value = '';
        
        // Pre checks SECTION
        document.getElementById('overallConditionOfVehicle').checked = false;
        document.getElementById('doesFuelCapOpen').checked = false;
        document.getElementById('chassisNumberTaken').checked = false;
        document.getElementById('registrationNumberTaken').checked = false;
        document.getElementById('vehicleCorrectlyRegistered').checked = false;

        // Sat on vehicle SECTION
        document.getElementById('handlebarsChecked').checked = false;
        document.getElementById('brakeLeversPedalsChecked').checked = false;
        document.getElementById('acceleratorChecked').checked = false;
        document.getElementById('clutchLeverChecked').checked = false;
        document.getElementById('steeringHeadBearingsChecked').checked = false;
        document.getElementById('hornOperationChecked').checked = false;
        document.getElementById('frontSuspensionBounceChecked').checked = false;
        document.getElementById('rearSuspensionBounceChecked').checked = false;

        // Front of vehicle SECTION
        document.getElementById('frontPositionLampsCondition').checked = false;
        document.getElementById('lampHousingUnitsCondition').checked = false;
        document.getElementById('frontDirectionLampsCondition').checked = false;
        document.getElementById('frontSuspensionComponentsCondition').checked = false;
        document.getElementById('brakeMasterCylinderCondition').checked = false;
        document.getElementById('fairingsBodyPanelsCondition').checked = false;

        // Front of vehicle raised SECTION
        document.getElementById('steeringCondition').checked = false;
        document.getElementById('suspensionComponentsCondition').checked = false;
        document.getElementById('wheelsCondition').checked = false;
        document.getElementById('wheelBearingCondition').checked = false;
        document.getElementById('frontTyreCondition').checked = false;
        document.getElementById('frontBrakeCondition').checked = false;

        // Offside of vehicle SECTION
        document.getElementById('frameCondition').checked = false;
        document.getElementById('seatingCondition').checked = false;
        document.getElementById('footRestCondition').checked = false;
        document.getElementById('rearSuspensionComponentsConditionOffside').checked = false;
        document.getElementById('finalDriveComponentsCondition').checked = false;
        document.getElementById('exhaustSystemCondition').checked = false;
        document.getElementById('fuelSystemCondition').checked = false;
        document.getElementById('rearTyreConditionOffside').checked = false;
        document.getElementById('rearBrakeCondition').checked = false;

        // Rear of vehicle SECTION
        document.getElementById('rearLightsCondition').checked = false;
        document.getElementById('stopLampsCondition').checked = false;
        document.getElementById('rearDirectionLampsCondition').checked = false;
        document.getElementById('rearReflectorCondition').checked = false;
        document.getElementById('registrationPlateLampsCondition').checked = false;
        document.getElementById('wheelAlignmentChecked').checked = false;

        // Nearside of vehicle SECTION
        document.getElementById('nearsideFrameCondition').checked = false;
        document.getElementById('nearsideSeatingCondition').checked = false;
        document.getElementById('nearsideFootRestCondition').checked = false;
        document.getElementById('nearsideRearSuspensionComponentsCondition').checked = false;
        document.getElementById('nearsideFinalDriveComponentsCondition').checked = false;
        document.getElementById('nearsideExhaustSystemCondition').checked = false;
        document.getElementById('nearsideFuelSystemCondition').checked = false;
        document.getElementById('nearsideRearTyreCondition').checked = false;
        document.getElementById('nearsideRearBrakeCondition').checked = false;

        // Rear of vehicle raised SECTION
        document.getElementById('rearWheelsCondition').checked = false;
        document.getElementById('rearWheelBearingCondition').checked = false;
        document.getElementById('rearSuspensionComponentsCondition').checked = false;
        document.getElementById('rearTyreCondition').checked = false;

        // Brake performance test SECTION
        document.getElementById('brakePerformanceChecked').checked = false;
        document.getElementById('brakePerformanceResultsRecorded').checked = false;

        // Notes and Confirmation
        document.getElementById('notes').value = '';
        document.getElementById('confirmedByTester').checked = false;

        document.getElementById('qcCheckerForBikeRecordId').value = '';
    }

    /////  QC CHECKERS FOR BIKES
    /////  SHOW MODAL FOR EXISTING RECORDS
    showQcCheckersForBikeDetails(id) {
        document.getElementById('qcCheckerForBikeModal').style.display = 'block';
        let record;
        
        for (let i = 0; i < this.qcCheckersForBikeData.length; i++) {
            if (this.qcCheckersForBikeData[i].id === parseInt(id)) {
                record = this.qcCheckersForBikeData[i];
                break;
            }
        }

        document.getElementById('testerName').value = record.tester_name || '';
        document.getElementById('testerID').value = record.tester_id || '';
        document.getElementById('vehicleReg').value = record.vehicle_reg || '';
        document.getElementById('dateOfQC_bikes').value = record.date_of_qc || '';
        document.getElementById('qcCarriedOutBy').value = record.qc_carried_out_by || '';
        document.getElementById('vehicleClass').value = record.vehicle_class || '';
        document.getElementById('nameQCChecker').value = record.name_qc_checker || '';

        // Pre checks SECTION
        document.getElementById('overallConditionOfVehicle').checked = record.overall_condition_of_vehicle || false;
        document.getElementById('doesFuelCapOpen').checked = record.does_fuel_cap_open || false;
        document.getElementById('chassisNumberTaken').checked = record.chassis_number_taken || false;
        document.getElementById('registrationNumberTaken').checked = record.registration_number_taken || false;
        document.getElementById('vehicleCorrectlyRegistered').checked = record.vehicle_correctly_registered || false;

        // Sat on vehicle SECTION
        document.getElementById('handlebarsChecked').checked = record.handlebars_checked || false;
        document.getElementById('brakeLeversPedalsChecked').checked = record.brake_levers_pedals_checked || false;
        document.getElementById('acceleratorChecked').checked = record.accelerator_checked || false;
        document.getElementById('clutchLeverChecked').checked = record.clutch_lever_checked || false;
        document.getElementById('steeringHeadBearingsChecked').checked = record.steering_head_bearings_checked || false;
        document.getElementById('hornOperationChecked').checked = record.horn_operation_checked || false;
        document.getElementById('frontSuspensionBounceChecked').checked = record.front_suspension_bounce_checked || false;
        document.getElementById('rearSuspensionBounceChecked').checked = record.rear_suspension_bounce_checked || false;

        // Front of vehicle SECTION
        document.getElementById('frontPositionLampsCondition').checked = record.front_position_lamps_condition || false;
        document.getElementById('lampHousingUnitsCondition').checked = record.lamp_housing_units_condition || false;
        document.getElementById('frontDirectionLampsCondition').checked = record.front_direction_lamps_condition || false;
        document.getElementById('frontSuspensionComponentsCondition').checked = record.front_suspension_components_condition || false;
        document.getElementById('brakeMasterCylinderCondition').checked = record.brake_master_cylinder_condition || false;
        document.getElementById('fairingsBodyPanelsCondition').checked = record.fairings_body_panels_condition || false;

        // Front of vehicle raised SECTION
        document.getElementById('steeringCondition').checked = record.steering_condition || false;
        document.getElementById('suspensionComponentsCondition').checked = record.suspension_components_condition || false;
        document.getElementById('wheelsCondition').checked = record.wheels_condition || false;
        document.getElementById('wheelBearingCondition').checked = record.wheel_bearing_condition || false;
        document.getElementById('frontTyreCondition').checked = record.front_tyre_condition || false;
        document.getElementById('frontBrakeCondition').checked = record.front_brake_condition || false;

        // Offside of vehicle SECTION
        document.getElementById('frameCondition').checked = record.frame_condition || false;
        document.getElementById('seatingCondition').checked = record.seating_condition || false;
        document.getElementById('footRestCondition').checked = record.foot_rest_condition || false;
        document.getElementById('rearSuspensionComponentsConditionOffside').checked = record.rear_suspension_components_condition_offside || false;
        document.getElementById('finalDriveComponentsCondition').checked = record.final_drive_components_condition || false;
        document.getElementById('exhaustSystemCondition').checked = record.exhaust_system_condition || false;
        document.getElementById('fuelSystemCondition').checked = record.fuel_system_condition || false;
        document.getElementById('rearTyreConditionOffside').checked = record.rear_tyre_condition_offside || false;
        document.getElementById('rearBrakeCondition').checked = record.rear_brake_condition || false;

        // Rear of vehicle SECTION
        document.getElementById('rearLightsCondition').checked = record.rear_lights_condition || false;
        document.getElementById('stopLampsCondition').checked = record.stop_lamps_condition || false;
        document.getElementById('rearDirectionLampsCondition').checked = record.rear_direction_lamps_condition || false;
        document.getElementById('rearReflectorCondition').checked = record.rear_reflector_condition || false;
        document.getElementById('registrationPlateLampsCondition').checked = record.registration_plate_lamps_condition || false;
        document.getElementById('wheelAlignmentChecked').checked = record.wheel_alignment_checked || false;

        // Nearside of vehicle SECTION
        document.getElementById('nearsideFrameCondition').checked = record.nearside_frame_condition || false;
        document.getElementById('nearsideSeatingCondition').checked = record.nearside_seating_condition || false;
        document.getElementById('nearsideFootRestCondition').checked = record.nearside_foot_rest_condition || false;
        document.getElementById('nearsideRearSuspensionComponentsCondition').checked = record.nearside_rear_suspension_components_condition || false;
        document.getElementById('nearsideFinalDriveComponentsCondition').checked = record.nearside_final_drive_components_condition || false;
        document.getElementById('nearsideExhaustSystemCondition').checked = record.nearside_exhaust_system_condition || false;
        document.getElementById('nearsideFuelSystemCondition').checked = record.nearside_fuel_system_condition || false;
        document.getElementById('nearsideRearTyreCondition').checked = record.nearside_rear_tyre_condition || false;
        document.getElementById('nearsideRearBrakeCondition').checked = record.nearside_rear_brake_condition || false;

        // Rear of vehicle raised SECTION
        document.getElementById('rearWheelsCondition').checked = record.rear_wheels_condition || false;
        document.getElementById('rearWheelBearingCondition').checked = record.rear_wheel_bearing_condition || false;
        document.getElementById('rearSuspensionComponentsCondition').checked = record.rear_suspension_components_condition || false;
        document.getElementById('rearTyreCondition').checked = record.rear_tyre_condition || false;

        // Brake performance test SECTION
        document.getElementById('brakePerformanceChecked').checked = record.brake_performance_checked || false;
        document.getElementById('brakePerformanceResultsRecorded').checked = record.brake_performance_results_recorded || false;

        // Notes and Confirmation
        document.getElementById('notes').value = record.notes || '';
        document.getElementById('confirmedByTester').checked = record.confirmed_by_tester || false;

        document.getElementById('qcCheckerForBikeRecordId').value = record.id || '';
    }

    /// QC CHECKERS FOR BIKES
    //// SAVE NEW OR EXISTING RECORD TO QC CHECKERS FOR BIKES
    saveNewQcCheckersForBikeRecord() {
        // Gathering data from the modal form
        const testerName = document.getElementById('testerName').value;
        const testerID = document.getElementById('testerID').value;
        const vehicleReg = document.getElementById('vehicleReg').value;
        const dateOfQC = document.getElementById('dateOfQC_bikes').value;
        const qcCarriedOutBy = document.getElementById('qcCarriedOutBy').value;
        const vehicleClass = document.getElementById('vehicleClass').value;
        const nameQCChecker = document.getElementById('nameQCChecker').value;
        const qcCheckerForBikeRecordId = document.getElementById('qcCheckerForBikeRecordId').value;

        // Pre checks SECTION
        const overallConditionOfVehicle = document.getElementById('overallConditionOfVehicle').checked;
        const doesFuelCapOpen = document.getElementById('doesFuelCapOpen').checked;
        const chassisNumberTaken = document.getElementById('chassisNumberTaken').checked;
        const registrationNumberTaken = document.getElementById('registrationNumberTaken').checked;
        const vehicleCorrectlyRegistered = document.getElementById('vehicleCorrectlyRegistered').checked;

        // Sat on vehicle SECTION
        const handlebarsChecked = document.getElementById('handlebarsChecked').checked;
        const brakeLeversPedalsChecked = document.getElementById('brakeLeversPedalsChecked').checked;
        const acceleratorChecked = document.getElementById('acceleratorChecked').checked;
        const clutchLeverChecked = document.getElementById('clutchLeverChecked').checked;
        const steeringHeadBearingsChecked = document.getElementById('steeringHeadBearingsChecked').checked;
        const hornOperationChecked = document.getElementById('hornOperationChecked').checked;
        const frontSuspensionBounceChecked = document.getElementById('frontSuspensionBounceChecked').checked;
        const rearSuspensionBounceChecked = document.getElementById('rearSuspensionBounceChecked').checked;

        // Front of vehicle SECTION
        const frontPositionLampsCondition = document.getElementById('frontPositionLampsCondition').checked;
        const lampHousingUnitsCondition = document.getElementById('lampHousingUnitsCondition').checked;
        const frontDirectionLampsCondition = document.getElementById('frontDirectionLampsCondition').checked;
        const frontSuspensionComponentsCondition = document.getElementById('frontSuspensionComponentsCondition').checked;
        const brakeMasterCylinderCondition = document.getElementById('brakeMasterCylinderCondition').checked;
        const fairingsBodyPanelsCondition = document.getElementById('fairingsBodyPanelsCondition').checked;

        // Front of vehicle raised SECTION
        const steeringCondition = document.getElementById('steeringCondition').checked;
        const suspensionComponentsCondition = document.getElementById('suspensionComponentsCondition').checked;
        const wheelsCondition = document.getElementById('wheelsCondition').checked;
        const wheelBearingCondition = document.getElementById('wheelBearingCondition').checked;
        const frontTyreCondition = document.getElementById('frontTyreCondition').checked;
        const frontBrakeCondition = document.getElementById('frontBrakeCondition').checked;

        // Offside of vehicle SECTION
        const frameCondition = document.getElementById('frameCondition').checked;
        const seatingCondition = document.getElementById('seatingCondition').checked;
        const footRestCondition = document.getElementById('footRestCondition').checked;
        const rearSuspensionComponentsConditionOffside = document.getElementById('rearSuspensionComponentsConditionOffside').checked;
        const finalDriveComponentsCondition = document.getElementById('finalDriveComponentsCondition').checked;
        const exhaustSystemCondition = document.getElementById('exhaustSystemCondition').checked;
        const fuelSystemCondition = document.getElementById('fuelSystemCondition').checked;
        const rearTyreConditionOffside = document.getElementById('rearTyreConditionOffside').checked;
        const rearBrakeCondition = document.getElementById('rearBrakeCondition').checked;

        // Rear of vehicle SECTION
        const rearLightsCondition = document.getElementById('rearLightsCondition').checked;
        const stopLampsCondition = document.getElementById('stopLampsCondition').checked;
        const rearDirectionLampsCondition = document.getElementById('rearDirectionLampsCondition').checked;
        const rearReflectorCondition = document.getElementById('rearReflectorCondition').checked;
        const registrationPlateLampsCondition = document.getElementById('registrationPlateLampsCondition').checked;
        const wheelAlignmentChecked = document.getElementById('wheelAlignmentChecked').checked;

        // Nearside of vehicle SECTION
        const nearsideFrameCondition = document.getElementById('nearsideFrameCondition').checked;
        const nearsideSeatingCondition = document.getElementById('nearsideSeatingCondition').checked;
        const nearsideFootRestCondition = document.getElementById('nearsideFootRestCondition').checked;
        const nearsideRearSuspensionComponentsCondition = document.getElementById('nearsideRearSuspensionComponentsCondition').checked;
        const nearsideFinalDriveComponentsCondition = document.getElementById('nearsideFinalDriveComponentsCondition').checked;
        const nearsideExhaustSystemCondition = document.getElementById('nearsideExhaustSystemCondition').checked;
        const nearsideFuelSystemCondition = document.getElementById('nearsideFuelSystemCondition').checked;
        const nearsideRearTyreCondition = document.getElementById('nearsideRearTyreCondition').checked;
        const nearsideRearBrakeCondition = document.getElementById('nearsideRearBrakeCondition').checked;

        // Rear of vehicle raised SECTION
        const rearWheelsCondition = document.getElementById('rearWheelsCondition').checked;
        const rearWheelBearingCondition = document.getElementById('rearWheelBearingCondition').checked;
        const rearSuspensionComponentsCondition = document.getElementById('rearSuspensionComponentsCondition').checked;
        const rearTyreCondition = document.getElementById('rearTyreCondition').checked;

        // Brake performance test SECTION
        const brakePerformanceChecked = document.getElementById('brakePerformanceChecked').checked;
        const brakePerformanceResultsRecorded = document.getElementById('brakePerformanceResultsRecorded').checked;

        // Notes and Confirmation
        const notes = document.getElementById('notes').value;
        const confirmedByTester = document.getElementById('confirmedByTester').checked;

        // Creating the object to send to the server
        const qcCheckersForBikeData = {
            tester_name: testerName,
            tester_id: testerID,
            garage_id: this.id,
            vehicle_reg: vehicleReg,
            date_of_qc: dateOfQC,
            qc_carried_out_by: qcCarriedOutBy,
            vehicle_class: vehicleClass,
            name_qc_checker: nameQCChecker,

            // Pre checks SECTION
            overall_condition_of_vehicle: overallConditionOfVehicle,
            does_fuel_cap_open: doesFuelCapOpen,
            chassis_number_taken: chassisNumberTaken,
            registration_number_taken: registrationNumberTaken,
            vehicle_correctly_registered: vehicleCorrectlyRegistered,

            // Sat on vehicle SECTION
            handlebars_checked: handlebarsChecked,
            brake_levers_pedals_checked: brakeLeversPedalsChecked,
            accelerator_checked: acceleratorChecked,
            clutch_lever_checked: clutchLeverChecked,
            steering_head_bearings_checked: steeringHeadBearingsChecked,
            horn_operation_checked: hornOperationChecked,
            front_suspension_bounce_checked: frontSuspensionBounceChecked,
            rear_suspension_bounce_checked: rearSuspensionBounceChecked,

            // Front of vehicle SECTION
            front_position_lamps_condition: frontPositionLampsCondition,
            lamp_housing_units_condition: lampHousingUnitsCondition,
            front_direction_lamps_condition: frontDirectionLampsCondition,
            front_suspension_components_condition: frontSuspensionComponentsCondition,
            brake_master_cylinder_condition: brakeMasterCylinderCondition,
            fairings_body_panels_condition: fairingsBodyPanelsCondition,

            // Front of vehicle raised SECTION
            steering_condition: steeringCondition,
            suspension_components_condition: suspensionComponentsCondition,
            wheels_condition: wheelsCondition,
            wheel_bearing_condition: wheelBearingCondition,
            front_tyre_condition: frontTyreCondition,
            front_brake_condition: frontBrakeCondition,

            // Offside of vehicle SECTION
            frame_condition: frameCondition,
            seating_condition: seatingCondition,
            foot_rest_condition: footRestCondition,
            rear_suspension_components_condition_offside: rearSuspensionComponentsConditionOffside,
            final_drive_components_condition: finalDriveComponentsCondition,
            exhaust_system_condition: exhaustSystemCondition,
            fuel_system_condition: fuelSystemCondition,
            rear_tyre_condition_offside: rearTyreConditionOffside,
            rear_brake_condition: rearBrakeCondition,

            // Rear of vehicle SECTION
            rear_lights_condition: rearLightsCondition,
            stop_lamps_condition: stopLampsCondition,
            rear_direction_lamps_condition: rearDirectionLampsCondition,
            rear_reflector_condition: rearReflectorCondition,
            registration_plate_lamps_condition: registrationPlateLampsCondition,
            wheel_alignment_checked: wheelAlignmentChecked,

            // Nearside of vehicle SECTION
            nearside_frame_condition: nearsideFrameCondition,
            nearside_seating_condition: nearsideSeatingCondition,
            nearside_foot_rest_condition: nearsideFootRestCondition,
            nearside_rear_suspension_components_condition: nearsideRearSuspensionComponentsCondition,
            nearside_final_drive_components_condition: nearsideFinalDriveComponentsCondition,
            nearside_exhaust_system_condition: nearsideExhaustSystemCondition,
            nearside_fuel_system_condition: nearsideFuelSystemCondition,
            nearside_rear_tyre_condition: nearsideRearTyreCondition,
            nearside_rear_brake_condition: nearsideRearBrakeCondition,

            // Rear of vehicle raised SECTION
            rear_wheels_condition: rearWheelsCondition,
            rear_wheel_bearing_condition: rearWheelBearingCondition,
            rear_suspension_components_condition: rearSuspensionComponentsCondition,
            rear_tyre_condition: rearTyreCondition,

            // Brake performance test SECTION
            brake_performance_checked: brakePerformanceChecked,
            brake_performance_results_recorded: brakePerformanceResultsRecorded,

            // Notes and Confirmation
            notes: notes,
            confirmed_by_tester: confirmedByTester,
        };

        if (qcCheckerForBikeRecordId === "") {
            // Sending the data to the server to create a new record
            createRecord('data_launch_qc_checkers_for_bike', qcCheckersForBikeData).then(res => {
                console.log('data_launch_qc_checkers_for_bike res', res);
                this.injectDataIntoQcCheckersForBikesSubgrid();
            }, err => { 
                console.error(err); 
            });
        } else {
            // Updating the existing record
            let recordId = parseInt(qcCheckerForBikeRecordId);
            qcCheckersForBikeData.id = recordId;
            updateRecord('data_launch_qc_checkers_for_bike', recordId, qcCheckersForBikeData).then(res => {
                console.log('data_launch_qc_checkers_for_bike res', res);
                for (let i = 0; i < this.qcCheckersForBikeData.length; i++) {
                    if (this.qcCheckersForBikeData[i].id === recordId) {
                        this.qcCheckersForBikeData[i] = res;
                    }        
                }
                this.injectDataIntoQcCheckersForBikesSubgrid();
            }, err => { 
                console.error(err); 
            });
        }
    }











    /// GARAGE BOOKINGS SUBGRID HANDLERS
    /// SHOW NEW MODAL FOR NEW RECORD
    showGarageBookingsModal() {
        document.getElementById('garageBookingModal').style.display = 'block';
        
        // Resetting fields to default values
        document.getElementById('vehicleReg').value = '';
        document.getElementById('vehicleMake').value = '';
        document.getElementById('vehicleModel').value = '';
        document.getElementById('title').value = '';
        document.getElementById('customerFirstName').value = '';
        document.getElementById('customerLastName').value = '';
        document.getElementById('customerMobile').value = '';
        document.getElementById('customerEmail').value = '';
        document.getElementById('motDueDate').value = '';
        document.getElementById('bookingDate').value = '';
        document.getElementById('timeStart').value = '';
        document.getElementById('timeEnd').value = '';
        document.getElementById('vehicleArrived').checked = false;
        document.getElementById('motCompleted').checked = false;
        document.getElementById('garageBookingRecordId').value = '';
    }
    /// GARAGE BOOKINGS SUBGRID HANDLERS
    //// SHOW MODAL FOR EXISTING RECORD0
    showGarageBookingsDetails(id) {
        document.getElementById('garageBookingModal').style.display = 'block';
        let record;
        
        for (let i = 0; i < this.garageBookingsData.length; i++) {
            if (this.garageBookingsData[i].id === parseInt(id)) {
                record = this.garageBookingsData[i];
                break;
            }
        }
        console.log('showGarageBookingsDetails', record)
        document.getElementById('vehicleReg').value = record.vehicle_reg || '';
        document.getElementById('vehicleMake').value = record.vehicle_make || '';
        document.getElementById('vehicleModel').value = record.vehicle_model || '';
        document.getElementById('title').value = record.title || '';
        document.getElementById('customerFirstName').value = record.customer_first_name || '';
        document.getElementById('customerLastName').value = record.customer_last_name || '';
        document.getElementById('customerMobile').value = record.customer_mobile || '';
        document.getElementById('customerEmail').value = record.customer_email || '';    
        if (record.booking_date) {
            let formattedDate = record.booking_date.split('T')[0];
            document.getElementById('bookingDate').value = formattedDate;
        }
        if (record.mot_due_date) {
            let formattedDate = record.mot_due_date.split('T')[0];
            document.getElementById('motDueDate').value = formattedDate || '';
        }
        document.getElementById('timeStart').value = record.time_start || '';
        document.getElementById('timeEnd').value = record.time_end || '';
        document.getElementById('vehicleArrived').checked = record.vehicle_arrived || false;
        document.getElementById('motCompleted').checked = record.mot_completed || false;
        document.getElementById('garageBookingRecordId').value = record.id || '';
    }
    /// GARAGE BOOKINGS SUBGRID HANDLERS
    ///// SAVE NEW OR EXISTING RECORD
    saveNewGarageBookingRecord() {
        // Gathering data from the modal form
        const vehicleReg = document.getElementById('vehicleReg').value;
        const vehicleMake = document.getElementById('vehicleMake').value;
        const vehicleModel = document.getElementById('vehicleModel').value;
        const title = document.getElementById('title').value;
        const customerFirstName = document.getElementById('customerFirstName').value;
        const customerLastName = document.getElementById('customerLastName').value;
        const customerMobile = document.getElementById('customerMobile').value;
        const customerEmail = document.getElementById('customerEmail').value;
        const motDueDate = document.getElementById('motDueDate').value;
        const bookingDate = document.getElementById('bookingDate').value;
        const timeStart = document.getElementById('timeStart').value;
        const timeEnd = document.getElementById('timeEnd').value;
        const vehicleArrived = document.getElementById('vehicleArrived').checked;
        const motCompleted = document.getElementById('motCompleted').checked;
        const garageBookingRecordId = document.getElementById('garageBookingRecordId').value;

        // Creating the object to send to the server
        const garageBookingData = {
            garage_id: this.id,
            vehicle_reg: vehicleReg,
            vehicle_make: vehicleMake,
            vehicle_model: vehicleModel,
            title: title,
            customer_first_name: customerFirstName,
            customer_last_name: customerLastName,
            customer_mobile: customerMobile,
            customer_email: customerEmail,
            mot_due_date: motDueDate,
            booking_date: bookingDate,
            time_start: timeStart,
            time_end: timeEnd,
            vehicle_arrived: vehicleArrived,
            mot_completed: motCompleted,
        };

        // Debugging
        console.log('garageBookingData', garageBookingData);
        console.log('garageBookingRecordId', garageBookingRecordId);

        if (garageBookingRecordId === "") {
            // Sending the data to the server to create a new record
            createRecord('data_launch_garage_bookings', garageBookingData).then(res => {
                console.log('data_launch_garage_bookings res', res);
                this.injectDataIntoGarageBookingsSubgrid();
            }, err => { 
                console.error(err); 
            });
        } else {
            // Updating the existing record
            let recordId = parseInt(garageBookingRecordId);
            garageBookingData.id = recordId;
            updateRecord('data_launch_garage_bookings', recordId, garageBookingData).then(res => {
                console.log('data_launch_garage_bookings res', res);
                for (let i = 0; i < this.garageBookingsData.length; i++) {
                    if (this.garageBookingsData[i].id === recordId) {
                        this.garageBookingsData[i] = res;
                    }        
                }
                this.injectDataIntoGarageBookingsSubgrid();
            }, err => { 
                console.error(err); 
            });
        }
    }



    /// DEFECT REPORT SUBGRID HANDLERS
    //// SHOW BLANK RECORD
    showDefectReportsModal() {
        document.getElementById('defectReportModal').style.display = 'block';
        
        // Reset fields
        document.getElementById('reference').value = '';
        document.getElementById('reportedDate').value = '';
        document.getElementById('details').value = '';
        document.getElementById('defectDescription').value = '';
        document.getElementById('dvsaNotified').checked = false;
        document.getElementById('repaired').checked = false;
        document.getElementById('repairedDate').value = '';
        document.getElementById('confirmedBy').value = '';
        document.getElementById('defectReportRecordId').value = '';
    }
    /// DEFECT REPORT SUBGRID HANDLERS
    //// SHOW EXISTING RECORD
    showDefectReportsDetails(id) {
        document.getElementById('defectReportModal').style.display = 'block';
        let record;
        
        for (let i = 0; i < this.defectReportData.length; i++) {
            if (this.defectReportData[i].id === parseInt(id)) {
                record = this.defectReportData[i];
                break;
            }
        }
        if (record.reported_date) {
            let formattedDate = record.reported_date.split('T')[0];
            document.getElementById('reportedDate').value = formattedDate;
        }
        else {
            document.getElementById('reportedDate').value = '';
        }
        if (record.repaired_date) {
            let formattedDate = record.repaired_date.split('T')[0];
            document.getElementById('repairedDate').value = formattedDate || '';
        }
        else {
            document.getElementById('repairedDate').value = '';
        }
        document.getElementById('reference').value = record.reference || '';
        document.getElementById('details').value = record.details || '';
        document.getElementById('defectDescription').value = record.defect_description || '';
        document.getElementById('dvsaNotified').checked = record.dvsa_notified || false;
        document.getElementById('repaired').checked = record.repaired || false;
        document.getElementById('confirmedBy').value = record.confirmed_by || '';
        document.getElementById('defectReportRecordId').value = record.id || '';
    }
    /// DEFECT REPORT SUBGRID HANDLERS
    //// SAVE NEW OR EXISTING RECORD
    saveNewDefectReportsRecord() {
        // Gathering data from the modal form
        const reference = document.getElementById('reference').value;
        const reportedDate = document.getElementById('reportedDate').value;
        const details = document.getElementById('details').value;
        const defectDescription = document.getElementById('defectDescription').value;
        const dvsaNotified = document.getElementById('dvsaNotified').checked;
        const repaired = document.getElementById('repaired').checked;
        const repairedDate = document.getElementById('repairedDate').value;
        const confirmedBy = document.getElementById('confirmedBy').value;
        const defectReportRecordId = document.getElementById('defectReportRecordId').value;

        // Creating the object to send to the server
        const defectReportData = {
            reference: reference,
            garage_id: this.id,
            reported_date: reportedDate,
            details: details,
            defect_description: defectDescription,
            dvsa_notified: dvsaNotified,
            repaired: repaired,
            repaired_date: repairedDate,
            confirmed_by: confirmedBy,
        };

        // Debugging
        console.log('defectReportData', defectReportData);
        console.log('defectReportRecordId', defectReportRecordId);

        if (defectReportRecordId === "") {
            // Sending the data to the server to create a new record
            createRecord('data_launch_defect_reports', defectReportData).then(res => {
                console.log('data_launch_defect_reports res', res);
                this.injectDataIntoDefectReportsSubgrid();
            }, err => { 
                console.error(err); 
            });
        } else {
            // Updating the existing record
            let recordId = parseInt(defectReportRecordId);
            defectReportData.id = recordId;
            updateRecord('data_launch_defect_reports', recordId, defectReportData).then(res => {
                console.log('data_launch_defect_reports res', res);
                for (let i = 0; i < this.defectReportData.length; i++) {
                    if (this.defectReportData[i].id === recordId) {
                        this.defectReportData[i] = res;
                    }        
                }
                this.injectDataIntoDefectReportsSubgrid();
            }, err => { 
                console.error(err); 
            });
        }
    }




/// MOT BAY CLEANING LOG CLASSES 
///// MOT BAY CLEANING LOG SHOW BLANK RECORD
    showMotBayCleaningLogModal() {
        document.getElementById('motBayCleaningLogModal').style.display = 'block';  
    
        document.getElementById('date').value = '';
        document.getElementById('signed').value = '';
        document.getElementById('description').value = '';
        document.getElementById('motBayCleaningLogRecordId').value = '';
    }
    /// MOT BAY CLEANING LOG CLASSES 
///// MOT BAY CLEANING LOG SHOW EXISTING RECORD

    showMotBayCleaningLogDetails(id) {
        document.getElementById('motBayCleaningLogModal').style.display = 'block';
        let record;
        
        for (let i = 0; i < this.motBayCleaningLogData.length; i++) {
            if (this.motBayCleaningLogData[i].id === parseInt(id)) {
                record = this.motBayCleaningLogData[i];
                break;
            }
        }
        if (record.date) {
            let formattedDate = record.date.split('T')[0];
            document.getElementById('date').value = formattedDate;
        }
        else {
            document.getElementById('date').value = '';
        }
        document.getElementById('signed').value = record.signed || '';
        document.getElementById('description').value = record.description || '';
        document.getElementById('motBayCleaningLogRecordId').value = record.id || '';
    }

/// MOT BAY CLEANING LOG CLASSES 
///// MOT BAY CLEANING LOG SAVE NEW / EXISTING RECORD

    saveNewMotBayCleaningLogRecord() {
        // Gathering data from the modal form
        const date = document.getElementById('date').value;
        const signed = document.getElementById('signed').value;
        const description = document.getElementById('description').value;
        const motBayCleaningLogRecordId = document.getElementById('motBayCleaningLogRecordId').value;

        // Creating the object to send to the server
        const motBayCleaningLogData = {
            garage_id: this.id,
            date: date,
            signed: signed,
            description: description,
        };

        // Debugging
        console.log('motBayCleaningLogData', motBayCleaningLogData);
        console.log('motBayCleaningLogRecordId', motBayCleaningLogRecordId);

        if (motBayCleaningLogRecordId === "") {
            // Sending the data to the server to create a new record
            createRecord('data_launch_mot_bay_cleaning_log', motBayCleaningLogData).then(res => {
                console.log('data_launch_mot_bay_cleaning_log res', res);
                this.injectDataIntoMotBayCleaningLogSubgrid();
            }, err => { 
                console.error(err); 
            });
        } else {
            // Updating the existing record
            let recordId = parseInt(motBayCleaningLogRecordId);
            motBayCleaningLogData.id = recordId;
            updateRecord('data_launch_mot_bay_cleaning_log', recordId, motBayCleaningLogData).then(res => {
                console.log('data_launch_mot_bay_cleaning_log res', res);
                for (let i = 0; i < this.motBayCleaningLogData.length; i++) {
                    if (this.motBayCleaningLogData[i].id === recordId) {
                        this.motBayCleaningLogData[i] = res;
                    }        
                }
                this.injectDataIntoMotBayCleaningLogSubgrid();
            }, err => { 
                console.error(err); 
            });
        }
    }








}

function openTab(evt, tabName, context) {
    var i, tabcontent, tablinks;
    
    // Select the tab contents and buttons specific to the context (modal)
    tabcontent = document.querySelectorAll(`#${context} .tab-content`);
    tablinks = document.querySelectorAll(`#${context} .tab-button`);
    
    // Hide all tab contents
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all tab buttons
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add "active" class to the clicked button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


  
  // Initialize first tab as active
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-button').click();
  });
  