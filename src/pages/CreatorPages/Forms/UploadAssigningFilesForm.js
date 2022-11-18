import React, {useState} from "react"

const ImageUpload = () =>{
    const [files , setFiles] = useState([])

  const fileSelectedHandler = (file) => {
    const addedFiles = files.concat(file)
    setFiles({ files: addedFiles })
    console.log(`upload file ` , file?.name)
  }


    return (
      < form >
        <div>
          <h2>Upload images</h2>
        </div>
        <h3>Images</h3>
        <input type="file" onChange={fileSelectedHandler} />
      </form>
    )
}

export default ImageUpload