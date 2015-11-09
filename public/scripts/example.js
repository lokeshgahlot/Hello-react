
var CommentBox = React.createClass({
  render: function() {
    return (
      <div class='commentBox'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
    <div class='commentList'>
      Hello World! I am a CommentList.
    </div>
    );
  }
});


var CommentForm = React.createClass({
  render: function() {
    return (
      <div>
        Hello World! I am a CommentForm.
      </div>
    );
  }
});



ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);
