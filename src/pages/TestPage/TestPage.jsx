import React, { PureComponent } from 'react';
import {
  Wrapper,
  Number,
  Text,
  Answers,
} from './TestPage.styles';

class TestPage extends PureComponent {
  render() {
    return (
      <Wrapper>
        <h1>
          Тест по математике
        </h1>
        <Number>
          <h3>
            1 задание
          </h3>
        </Number>
        <Text>
          Равным образом консультация с широким активом требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый опыт рамки и место обучения кадров требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности играет важную роль в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требуют от нас анализа систем массового участия.
        </Text>
        <Answers>
          <label className="form-check-label" htmlFor="exampleRadios1">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            Default radio
          </label>
          <label className="form-check-label" htmlFor="exampleRadios2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            Second default radio
          </label>
        </Answers>
      </Wrapper>
    );
  }
}

export default TestPage;
