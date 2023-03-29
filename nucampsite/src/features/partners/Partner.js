const Partner = ({partner}) => {
    if (partner) {
       const {image, name, description}=partner;
        return (
            <>
            <img src={image} alt={name} style={{widge:"150px"}}/>
            <div className="m-4">
                <h5 className='fw-bold'>{name}</h5>
                    {description}
            </div>
            </>
        );

};
return null;
};

export default Partner;