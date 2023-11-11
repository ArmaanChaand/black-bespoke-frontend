export function ImageElm({src, alt, classes}){
    const tw_classes = `inline-block w-full h-full object-cover`
    return (
        <img 
            className={tw_classes + " " + classes}
            src={src}
            alt={alt}            
        />
    )
}