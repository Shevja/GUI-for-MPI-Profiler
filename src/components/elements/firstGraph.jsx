import React from "react";

class FirstGraph extends React.Component {
    handleInputFile = (e) => {
        this.readFile(e.target.files[0])
    }
    
    readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            console.log(text);
        };
        reader.readAsText(file);
    };

    handleDrop = (e) => {
        let dt = e.dataTransfer
        let files = dt.files
        console.log("handleDrop", files[0])
        this.readFile(files[0])
    };

    handleDrag = (e) => {}
    handleDragIn = (e) => {}
    handleDragOut = (e) => {}

    componentDidMount() {
        let dropArea = document.getElementById('drop-area')

            ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, preventDefaults, false)
            })
        function preventDefaults(e) {
            e.preventDefault()
        }

        dropArea.addEventListener('dragenter', this.handleDragIn, false)
        dropArea.addEventListener('dragleave', this.handleDragOut, false)
        dropArea.addEventListener('dragover', this.handleDrag, false)
        dropArea.addEventListener('drop', this.handleDrop, false)
    };


    render() {
        return (
            <div>
                firstGraph
                <div id="drop-area">
                    Drop zone
                </div>
                <input type="file" id="file-input" multiple onChange={ this.handleInputFile } />
            </div>
        );
    }
}

export default FirstGraph