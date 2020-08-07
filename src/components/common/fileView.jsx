import React, { Component } from "react";
import { FileViewer } from "react-file-viewer";
import { Box } from "@material-ui/core";

class FileView extends Component {
  state = {
    files: ["resume", "python", "javascript", "react", "node"],
    file: "",
    type: "",
    path: "",
  };
  UNSAFE_componentDidMount() {
    const file = this.props.match.params.id;
    if (!this.state.files.includes(file))
      return this.props.history.replace("/not-found");
    const path = `../../static/${file}.pdf`;
    this.setState({ file, path });
  }
  onError(e) {
    console.log(e);
  }
  render() {
    return (
      //<h1>{this.state.file}</h1>
      <Box component="div" style={{ backgroundColor: "#FFFFFF" }}>
        <FileViewer
          fileType="pdf"
          filePath="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          errorComponent={() => {
            console.log("meet");
          }}
          onError={this.onError}
        />
      </Box>
    );
  }
}

export default FileView;
