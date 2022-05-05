import React from "react";

class HomePage extends React.Component {
    constructor (props) {
        super(props);
    }

    handleInputFile = (e) => {
        this.readFile(e.target.files[0])
    }

    readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            this.props.handleLoad(text);
        };
        reader.readAsText(file);
    };

    handleDrop = (e) => {
        e.target.classList.remove('highlight')
        let dt = e.dataTransfer
        let files = dt.files
        this.readFile(files[0])
    };

    handleDrag = (e) => { }
    handleDragIn = (e) => { e.target.classList.add('highlight') }
    handleDragOut = (e) => { e.target.classList.remove('highlight') }

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
                <p>firstGraph</p>
                <input type="file" id="file-input" multiple onChange={this.handleInputFile}/>
                <div id="drop-area">Переместите свой файл сюда</div>
            </div>
        );
    }
}

export default HomePage;