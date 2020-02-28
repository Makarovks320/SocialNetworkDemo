import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {FooterContainer} from './Footer.styles'
import { connect } from 'react-redux';

const Footer = (props) => {
  return (
    <FooterContainer styles={props.styles}>
      <div className="middle-footer">
        <Container>
          <Row>
            <Col sm={6} md={4}>
              <h4>Header 1</h4>
              <ul className="list-unstyled">
                <li><a href="#/">Lorem, ipsum dolor.</a></li>
                <li><a href="#/">At, facere voluptates!</a></li>
                <li><a href="#/">Aliquam, ex cupiditate?</a></li>
                <li><a href="#/">Fugit, voluptatem in?</a></li>
              </ul>
            </Col>
            <Col sm={6} md={4}>
              <h4>Header 2</h4>
              <ul className="list-unstyled">
                <li><a href="#/">Quae, iure beatae!</a></li>
                <li><a href="#/">Maxime, illo quo!</a></li>
                <li><a href="#/">Fugiat, laboriosam debitis!</a></li>
                <li><a href="#/">Incidunt, accusamus corporis!</a></li>
              </ul>
            </Col>
            <Col sm={6} md={4}>
              <h4>Header 3</h4>
              <ul className="list-unstyled">
                <li><a href="#/">Similique, qui voluptatem?</a></li>
                <li><a href="#/">Alias, fuga facere.</a></li>
                <li><a href="#/">Beatae, perferendis dolorem!</a></li>
                <li><a href="#/">Ducimus, facere molestias!</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <p className="text-sm-center">
          &copy;{new Date().getFullYear()} React Developers Network - All Rights Reserved
        </p>
      </div>
    </FooterContainer>
  )
}


let mapStateToProps = (state) => {
  return {
  styles: state.theme.themeColors}
}
export default connect(mapStateToProps)(Footer);