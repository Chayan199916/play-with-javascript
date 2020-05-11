function update_map(){
    fetch("http://127.0.0.1:5500/corona_map/data.json")
    .then(response => response.json())
    .then(data => {
        data["data"].forEach(element => {
           longi = element.longitude;
           lati = element.latitude;
           infected = element.infected;
           if(element.infected > 255){
               color = `rgb(255, 0, 0)`;
           }
           else{
               color = `rgb(${element.infected}, 0, 0)`;
           }

           var marker = new mapboxgl.Marker({
            draggable: false,
            color : color,
            size: 'large',
            symbol: 'rocket'
        })
    
        
            
            .setLngLat([longi, lati])
            .addTo(map)
            .setPopup(popup);
        marker.on('dragend', onDragEnd);
        });
    })

    

}
update_map();