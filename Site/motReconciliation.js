console.log('global Option Sets file')

class MOTReconciliation {
    constructor() {
        this.dvsaReport= []
        this.redValues = []
        this.bookingReport = []
        this.renderPage()
        document.getElementById('data-launch-side-bar').classList.remove('data-launch-activate-menu')
        this.addListeners()
    }
    runQuery () {
        console.log('run query func')
        for (let i = 1; i < this.dvsaReport.length; i++) {
            let match = false
            for (let t = 0; t < this.bookingReport.length; t++) {
                if (this.dvsaReport[i].D === this.bookingReport[t].D) {
                    match = true
                    let x = Array.from(document.getElementsByClassName(`regNumber_${this.dvsaReport[i].D}`))
                    x.forEach(el => {
                        el.style.backgroundColor = '#75b798'
                    })
                }          
            }
            if (match === false) {
                let x = Array.from(document.getElementsByClassName(`regNumber_${this.dvsaReport[i].D}`))
                this.redValues.push(`regNumber_${this.dvsaReport[i].D}`)
                    x.forEach(el => {
                        el.style.backgroundColor = 'red'
                    })
            }        
        }
    }    
    onlyShowRed () {
        let x = Array.from(document.getElementsByClassName('data-row'))
        x.forEach(el => {
            el.classList.add('data-launch-inactive')
        })
        for (let i = 0; i < this.redValues.length; i++) {
            let y = Array.from(document.getElementsByClassName(`${this.redValues[i]}_row`))
            y.forEach(el => {
                el.classList.remove('data-launch-inactive')
            })       
        }    
    }
    showAll () {
        let x = Array.from(document.getElementsByClassName('data-row'))
        x.forEach(el => {
            el.classList.remove('data-launch-inactive')
        })
    }
    parseExcel (file, num) {
        var reader = new FileReader();
  
        reader.onload = (e) => {
          var data = e.target.result;
          var workbook = XLSX.read(data, {
            type: 'binary'
          });
          workbook.SheetNames.forEach(sheetName => {
            // https://docs.sheetjs.com/#json
            var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: "A"});
          console.log('XL_row_object.length', XL_row_object.length)
        //   totalLength = XL_row_object.length
          if (num === '1') {
             this.bookingReport = XL_row_object
             console.log('this.bookingReport data is', this.bookingReport)
             document.getElementById("data-launch-booking-report-tick-container").classList.remove('data-launch-inactive')
          }
          if (num === '2') {
              this.dvsaReport = XL_row_object
              document.getElementById("data-launch-dvsa-report-tick-container").classList.remove('data-launch-inactive')
              this.renderHTML(XL_row_object)
          }
        
          //   XL_row_object.forEach(
  
          //     function(i, num) {
          //       buildDataObject(i, num)
          //     }
  
          //   );  // end forEach on XL_row_object          
          });
        };
  
        reader.onerror = function(ex) {
          console.log(ex);
        };
  
        reader.readAsBinaryString(file);
      }; // end parseExcel
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
    renderPage() {
        console.log('test')        
        let html = `
        <div class='container'>
            <div class='data-launch-mot-reconciliation-header'>
                <button class="btn btn-primary data-launch-upload-booking-report-btn data-launch-upload-file-1" id="xpg_uploadFile1Btn">Upload Booking Report</button>
                <button class="btn btn-primary data-launch-upload-booking-report-btn data-launch-upload-file-2" id="xpg_uploadFile2Btn">Upload DVSA Report</button><br>
            </div>
            <div class='data-launch-mot-reconciliation-header'>
                <div class='data-launch-booking-report-tick-container data-launch-inactive' id='data-launch-booking-report-tick-container'>
                    <i class="bi bi-check-circle"></i>
                </div>
                <div class='data-launch-booking-report-tick-container data-launch-inactive' id='data-launch-dvsa-report-tick-container'>
                    <i class="bi bi-check-circle"></i>
                </div>
            </div>
            <div class='data-launch-mot-reconciliation-header'>
                <button style='width: 49%; display: inline-block; font-size: 18px;' class='btn btn-warning data-launch-only-show-red data-launch-inactive' id='data-launch-mot-reconciliation-red-only'>Red Only</button>
                <button style='width: 49%; display: inline-block; font-size: 18px;' class='btn btn-warning data-launch-show-all data-launch-inactive' id='data-launch-mot-reconciliation-show-all'>Show All Rows</button>       
            </div>
            <div class='data-launch-mot-reconciliation-header'>
                <button style='width: 99%; display: inline-block; font-size: 18px;' class='btn btn-success data-launch-export-all-records data-launch-inactive' id='data-launch-mot-reconciliation-export-all'>Export Rows</button>       
            </div>
 
            <div style="width: 99%; overflow-y: scroll;" id="motExpertHTML"></div>
        </div>
        `
        document.getElementById('motReconciliationsPage').innerHTML = html
    }
    uploadFile (num) {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
          // you can use this method to get file and perform respective operations
                  let files =   Array.from(input.files);
                  var xl2json = this.ExcelToJSON();
                  this.parseExcel(files[0], num);              
              };
        input.click();
    }
    renderHTML (data) {
        document.getElementById('data-launch-mot-reconciliation-red-only').classList.remove('data-launch-inactive')
        document.getElementById('data-launch-mot-reconciliation-show-all').classList.remove('data-launch-inactive')
        document.getElementById('data-launch-mot-reconciliation-export-all').classList.remove('data-launch-inactive')        
        console.log('data is', data)
        let exportRow = 0
           let html = `<table class='table'><thead>`
           for (let i = 0; i < data.length; i++) {
              if (i === 0) {
                html += ` <tr>
               <th>${data[i].A}</th>
               <th>${data[i].AA}</th>
               <th>${data[i].AB}</th>
               <th>${data[i].AC}</th>
               <th>${data[i].B}</th>
               <th>${data[i].C}</th>
               <th>${data[i].D}</th>
               <th>${data[i].E}</th>
               <th>${data[i].F}</th>
               <th>${data[i].G}</th>
               <th>${data[i].H}</th>
               <th>${data[i].I}</th>
               <th>${data[i].J}</th>
               <th>${data[i].K}</th>
               <th>${data[i].L}</th>
               <th>${data[i].M}</th>
               <th>${data[i].N}</th>
               <th>${data[i].O}</th>
               <th>${data[i].P}</th>
               <th>${data[i].Q}</th>
               <th>${data[i].R}</th>
               <th>${data[i].S}</th>
               <th>${data[i].T}</th>
               <th>${data[i].U}</th>
               <th>${data[i].V}</th>
               <th>${data[i].W}</th>
               <th>${data[i].X}</th>
               <th>${data[i].Y}</th>
               <th>${data[i].Z}</th>
               </tr>
               </thead><tbody>`
              }
              else {
               html += `<tr class='data-row regNumber_${data[i].D}_row export-row' data-export-row="${exportRow}">
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].A}" data-export-row="${exportRow}" data-export-val="${data[i].A}">${data[i].A}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].AA}" data-export-row="${exportRow}" data-export-val="${data[i].AA}">${data[i].AA}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].AB}" data-export-row="${exportRow}" data-export-val="${data[i].AB}">${data[i].AB}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].AC}" data-export-row="${exportRow}" data-export-val="${data[i].AC}">${data[i].AC}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].B}" data-export-row="${exportRow}" data-export-val="${data[i].B}">${data[i].B}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].C}" data-export-row="${exportRow}" data-export-val="${data[i].C}">${data[i].C}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].D}" data-export-row="${exportRow}" data-export-val="${data[i].D}">${data[i].D}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].E}" data-export-row="${exportRow}" data-export-val="${data[i].E}">${data[i].E}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].F}" data-export-row="${exportRow}" data-export-val="${data[i].F}">${data[i].F}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].G}" data-export-row="${exportRow}" data-export-val="${data[i].G}">${data[i].G}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].H}" data-export-row="${exportRow}" data-export-val="${data[i].H}">${data[i].H}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].I}" data-export-row="${exportRow}" data-export-val="${data[i].I}">${data[i].I}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].J}" data-export-row="${exportRow}" data-export-val="${data[i].J}">${data[i].J}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].K}" data-export-row="${exportRow}" data-export-val="${data[i].K}">${data[i].K}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].L}" data-export-row="${exportRow}" data-export-val="${data[i].L}">${data[i].L}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].M}" data-export-row="${exportRow}" data-export-val="${data[i].M}">${data[i].M}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].N}" data-export-row="${exportRow}" data-export-val="${data[i].N}">${data[i].N}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].O}" data-export-row="${exportRow}" data-export-val="${data[i].O}">${data[i].O}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].P}" data-export-row="${exportRow}" data-export-val="${data[i].P}">${data[i].P}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].Q}" data-export-row="${exportRow}" data-export-val="${data[i].Q}">${data[i].Q}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].R}" data-export-row="${exportRow}" data-export-val="${data[i].R}">${data[i].R}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].S}" data-export-row="${exportRow}" data-export-val="${data[i].S}">${data[i].S}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].T}" data-export-row="${exportRow}" data-export-val="${data[i].T}">${data[i].T}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].U}" data-export-row="${exportRow}" data-export-val="${data[i].U}">${data[i].U}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].V}" data-export-row="${exportRow}" data-export-val="${data[i].V}">${data[i].V}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].W}" data-export-row="${exportRow}" data-export-val="${data[i].W}">${data[i].W}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].X}" data-export-row="${exportRow}" data-export-val="${data[i].X}">${data[i].X}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].Y}" data-export-row="${exportRow}" data-export-val="${data[i].Y}">${data[i].Y}</td>
               <td class='regNumber_${data[i].D} export-record' data-export-header="${data[0].Z}" data-export-row="${exportRow}" data-export-val="${data[i].Z}">${data[i].Z}</td>
                       </tr>`
               exportRow++   
              }                
           }
           html += `</tbody></table>`
           document.getElementById('motExpertHTML').innerHTML = html
           this.runQuery()
    }
    export = () => {

        const wb = new ExcelJS.Workbook();
        const worksheetName = 'Simple Worksheet';
        const ws = wb.addWorksheet(worksheetName);

        let x = Array.from(document.getElementsByClassName('export-record'))
        let r = Array.from(document.getElementsByClassName('export-row'))
        // Filter the array
        r = r.filter(element => {
            const hasInactiveClass = element.classList.contains('data-launch-inactive');
            // Log the elements being checked
            console.log("Element:", element, "Has 'data-launch-inactive' class:", hasInactiveClass);
            return !hasInactiveClass;
        });



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
    addListeners () {
        document.getElementById('motReconciliationsPage').addEventListener('click', (event) => {
            event.stopPropagation()
            if (event.target.classList.contains('data-launch-only-show-red')) {
                this.onlyShowRed()
            }
            else if (event.target.classList.contains('data-launch-show-all')) {
                console.log('show new option set form')
                this.showAll()
            }
            else if (event.target.classList.contains('data-launch-upload-file-1')) {
                console.log('show new option set form')
                this.uploadFile('1')
            }
            else if (event.target.classList.contains('data-launch-upload-file-2')) {
                console.log('show new option set form')
                this.uploadFile('2')
            }
            else if (event.target.classList.contains('data-launch-export-all-records')) {
                this.export()
            }                
        })
    }    
}