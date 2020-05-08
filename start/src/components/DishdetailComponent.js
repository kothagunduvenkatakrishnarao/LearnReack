import React, {Component}from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(comments) {
    if (comments == null) return <div></div>;
    const options = { month: "short", day: "numeric", year: "numeric" };
    const cmts = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            --{comment.author},
            {new Intl.DateTimeFormat("en-US", options).format(
              new Date(comment.date)
            )}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{cmts}</ul>
      </div>
    );
  }
  render() {
    const item = this.props.dish;
    if (item == null) return <div></div>;
    const dish_item = this.renderDish(item);
    const dish_comments = this.renderComments(item.comments);
    return (
      <div className="row">
        {dish_item}
        {dish_comments}
      </div>
    );
  }
}

export default DishDetail;