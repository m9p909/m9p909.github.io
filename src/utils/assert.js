
const assert = (bool, error) => {
    if(!bool){
        throw new Error(error);
    }
    return true;
}

export default assert;
