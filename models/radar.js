class Radar {
    constructor(id, title, data) {
            this.id = id;
            this.title=title,
            this.icon="folder",
            this.nodeId=1,
            this.primaryXAxis={
                valueType: 'Category',
                labelPlacement: 'OnTicks',        
                interval: 1
              },
            this.primaryYAxis={
                minimum: 0, 
                maximum: 5,         
                interval: 1,
                title: 'Efficiency',
                labelFormat: '{value}'
              },
            this.data=data,
            this.tooltip={
                enable: true, 
                format: '${point.text} : <b>${point.y}</b>'
              }
    }
}

module.exports = Radar;