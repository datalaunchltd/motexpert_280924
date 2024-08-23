console.log('garages file')

class Garage {
    constructor(id) {
        console.log('hit the garages section')
        this.filteredData = []
        this.filters = []
        this.testerData = testersData
        this.selectedTesterId = null;
        this.setupModal();
        this.data = garageData
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
    injectDataIntoMotEquipmentSubgrid() {
        fetchData('data_launch_mot_equipment', 100).then(res => {
            console.log('the data_launch_mot_equipment data is as such', res)
            let reducedArrayForGarageRecordID = []
            for (let i = 0; i < res.length; i++) {
                if (res[i]["garage_id"] === parseInt(this.id)) {
                    reducedArrayForGarageRecordID.push(res[i])
                }                    
            }
            console.log('reducedArrayForGarageRecordID', reducedArrayForGarageRecordID)
            let data = []
            for (let i = 0; i < reducedArrayForGarageRecordID.length; i++) {
                data.push({
                        name: `${reducedArrayForGarageRecordID[i].equipment_type}`,
                        id: reducedArrayForGarageRecordID[i].id,
                        make: reducedArrayForGarageRecordID[i].make,
                        model: reducedArrayForGarageRecordID[i].model,
                        serial_no: reducedArrayForGarageRecordID[i].serial_no,
                        bay: reducedArrayForGarageRecordID[i].bay                    
                    })                         
            }                
            new SubGrid(data, 'data-launch-garage-mot-equipment-cont', 'garage_mot_equipment', this.id);
        },
        err => {
            console.error(err);
        }
    );
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
                    name: 'summary'
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
                    name: 'garage-details'
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
                    name: 'credentials'
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
                    name: 'address'
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
                    name: 'aedm'
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
                    name: 'testing-classes'
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
                    name: 'testers'
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
                    name: 'mot-equipment'
                },
                fields: [
                    {
                        type: 'garageMotEquipmentSubgrid',
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
            html +=     `<li class="nav-item data-launch-tabs-parent-li-testing-station data-launch-tabs-parent-li-garges modern-nav-item" id="garages_parent_li_${headers[key].meta.name}">
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
                    html += `<div class='col-lg-4 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
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
                                         <button class="data-launch-create-new-mot-equipment-record modern-button" data-launch-garage-id='${this.id}'>
                                                <i class="bi bi-plus-circle"></i> Add New MOT Equipment Record
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
        let html = ''
        if (rec) {
            this.newRecord = false
            this.recordId = rec.id
            this.id = rec.id      
            html = `
            <div class='container-fluid'>
                            <div class='row'>
                                <div style='display: none' class='data-launch-notes-modal-box-popup-cont' id='data-launch-mot-equipment-modal-box-popup'>
                                    <div class="modal-overlay">
                                        <div class="modal-content modern-modal">
                                            <button class='data-launch-mot-equipment-close-button modern-close-button'>X</button>
                                            <h2 class="modern-modal-title">Add New MOT Equipment</h2>
                                            <label for="equipmentType" class="modern-modal-label">Equipment Type:</label>
                                            <input type="text" id="mot_equipment_type_${this.id}" name="equipmentType" placeholder="Enter Equipment Type..." class="modern-modal-input">
                                            <label for="make" class="modern-modal-label">Make:</label>
                                            <input type="text" id="mot_equipment_make_${this.id}" name="make" placeholder="Enter Make..." class="modern-modal-input">
                                            <label for="model" class="modern-modal-label">Model:</label>
                                            <input type="text" id="mot_equipment_model_${this.id}" name="model" placeholder="Enter Model..." class="modern-modal-input">
                                            <label for="serial_no" class="modern-modal-label">Serial No:</label>
                                            <input type="text" id="mot_equipment_serial_no_${this.id}" name="serial_no" placeholder="Enter Serial No..." class="modern-modal-input">
                                            <label for="bay" class="modern-modal-label">Bay:</label>
                                            <input type="text" id="mot_equipment_bay_${this.id}" name="bay" placeholder="Enter Bay..." class="modern-modal-input">
                                             <div class="modern-modal-footer">
                                                <button class="btn btn-primary data-launch-save-mot-equipment modern-save-button">Save MOT Equipment</button>
                                            </div>
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
            html = `
            <i class="bi bi-plus data-launch-nav-menu-plus-icon" id="data-launch-nav-menu-plus-icon"></i>
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
    }


    saveAndClose () {
        // this effectively deletes the element, including all of the event listeners, and then creates a new copy with zero event listeners attached
        this.saveDetailsAboutTheRecord()
        const oldElement = document.getElementById('garagePage');
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
                },
                function error (err) {
                    console.log(err)
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
                },
                err => {
                    console.log(err)
                }
            )
        }    
    }
}