import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import forestImg from '../assets/forest1.jpeg';
import dforestImg from '../assets/forest2.jpeg';
import cforestImg from '../assets/forest3.jpeg';
export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={forestImg}
            alt="Forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>
              Леса приносят много радости и пользы человеку. Они задерживают
              ветры и бури, не дают выдувать снег с полей, благодаря чему
              сохраняется урожай.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dforestImg}
            alt="Forest" />
          <Carousel.Caption>
            <h3>Forest image2</h3>
            <p>
              Леса приносят много радости и пользы человеку. Они задерживают
              ветры и бури, не дают выдувать снег с полей, благодаря чему
              сохраняется урожай.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ cforestImg }
            alt="Forest" />
          <Carousel.Caption>
            <h3>Forest image3</h3>
            <p>
              Леса приносят много радости и пользы человеку. Они задерживают
              ветры и бури, не дают выдувать снег с полей, благодаря чему
              сохраняется урожай.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
