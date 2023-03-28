import {Col, Row, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

const SubHeader = ({current, detail}) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to="/directory">Directory</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}
                    </BreadcrumbItem>
                    <h2>{current}</h2><hr/>
                </Breadcrumb>
            </Col>
        </Row>
    )
};

export default SubHeader;