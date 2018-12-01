import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 300,
        margin: 100,
    },
    //style for font size
    resize:{
      fontSize:14
    },
}

class UpdateBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        title: this.props.title,
        body: this.props.body,
        id: this.props.id
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onBodyChange = (e) => {
    const body = e.target.value
    this.setState(() => ({ body }))
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleUpdate = (e) => {
    this.props.onSubmit(this.state.title, this.state.body);
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button style={{fontSize: "12px"}} onClick={this.handleClickOpen}>Update</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll="paper"
          aria-labelledby="form-dialog-title"
          maxWidth="md"
          fullWidth={true}
        >
          <DialogTitle id="form-dialog-title">Update Post</DialogTitle>
          <DialogContent>
            <TextField
              id="title"
              label="Title"
              value={this.state.title}
              onChange={this.onTitleChange}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              fullWidth
            />
            <TextField
              id="body"
              label="Body"
              value={this.state.body}
              onChange={this.onBodyChange}
              multiline={true}
              rows={15}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button style={{fontSize: "12px"}} onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button style={{fontSize: "12px"}} onClick={this.handleUpdate} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(UpdateBlog);