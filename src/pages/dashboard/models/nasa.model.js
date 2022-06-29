export const nasaModel = ( item ) =>{
    
    const { data, links } = item;
    console.log(links)
    return{
        title: data[0]?.title,
        description: data[0]?.description,
        images: [links]
    }
}