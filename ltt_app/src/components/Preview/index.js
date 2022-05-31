export const Preview = ({files}) => {
    if (!files.length) {
        return null
    }

    return files.map((file) => <img style={{maxWidth: '200px'}} src={`//localhost:8080/${file.filename}`} alt={file.originalname}/>);
};