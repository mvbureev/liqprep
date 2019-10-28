import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import If from 'react-if';
import MathJax from 'react-mathjax2';
import {
  Wrapper,
  Number,
  Text,
  Answers,
} from './TestPage.style';

class TestPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswersCount: 0,
      page: 1,
      result: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.pages.length > this.state.page) {
      if (
        +event.target.value
        === this.props.pages[this.state.page - 1].trueAnswerId
      ) {
        // КУДА ПРОПАДАЕТ 1 ОТВЕТ?
        this.setState({
          correctAnswersCount: this.state.correctAnswersCount + 1,
          page: this.state.page + 1,
        });
      } else {
        this.setState({
          page: this.state.page + 1,
        });
      }
    } else {
      this.setState({
        result: true,
      });
    }
  }

  render() {
    const { correctAnswersCount, page, result } = this.state;
    const { title, pages } = this.props;
    return (
      <Wrapper>
        <h1>{title}</h1>
        {pages
          && pages.map((p) => (
            <If condition={p.id === page && !result} key={`p${p.id}`}>
              <React.Fragment key={`p${p.id}`}>
                <Number>
                  <h3>{p.task}</h3>
                </Number>
                <Text>{p.text}</Text>
                <Answers>
                  {p.answers
                    && p.answers.map((item) => (
                      <div
                        className="custom-control custom-radio"
                        key={item.id}
                      >
                        <input
                          type="radio"
                          id={`customRadio${item.id}`}
                          name="customRadio"
                          value={item.id}
                          className="custom-control-input"
                          onChange={this.handleChange}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={`customRadio${item.id}`}
                        >
                          {item.answerText}
                        </label>
                      </div>
                    ))}
                </Answers>
              </React.Fragment>
              Правильных ответов:
              {' '}
              {correctAnswersCount}
            </If>
          ))}
        <If condition={result}>
          <>
            <h3>
              Правильных ответов:
              {' '}
              {correctAnswersCount}
            </h3>
            <h3>
              Ошибок:
              {' '}
              {pages.length - correctAnswersCount}
            </h3>
            <h3>
              Оценка:
              {' '}
              <If condition={correctAnswersCount > 0}>
                <>
                  {Math.round((correctAnswersCount / pages.length) * 5)}
                  /5
                </>
              </If>
              <If condition={correctAnswersCount <= 0}>1/5</If>
            </h3>
          </>
        </If>
      </Wrapper>
    );
  }
}

TestPage.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      task: PropTypes.string,
      text: PropTypes.any,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          answerText: PropTypes.any,
        }),
      ),
      trueAnswerId: PropTypes.number,
    }),
  ),
};

TestPage.defaultProps = {
  title: 'Демовариант теста',
  pages: [
    {
      id: 1,
      task:
        '1 задача, вычисли устно, используя формулы умножения и деления степеней с одинаковыми основаниями и возведение степени в степень',
      text: (
        <MathJax.Context input="ascii">
          <MathJax.Node>c^3*c^4</MathJax.Node>
        </MathJax.Context>
      ),
      answers: [
        {
          id: 1,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>c^7</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 2,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>c^12</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 3,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>c^1</MathJax.Node>
            </MathJax.Context>
          ),
        },
      ],
      trueAnswerId: 1,
    },
    {
      id: 2,
      task:
        '2 задача, вычисли устно, используя формулы умножения и деления степеней с одинаковыми основаниями и возведение степени в степень',
      text: (
        <MathJax.Context input="ascii">
          <MathJax.Node>a^10:a^4</MathJax.Node>
        </MathJax.Context>
      ),
      answers: [
        {
          id: 1,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>a^2.5</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 2,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>a^6</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 3,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>a^14</MathJax.Node>
            </MathJax.Context>
          ),
        },
      ],
      trueAnswerId: 2,
    },
    {
      id: 3,
      task:
        '3 задача, вычисли устно, используя формулы умножения и деления степеней с одинаковыми основаниями и возведение степени в степень',
      text: (
        <MathJax.Context input="ascii">
          <MathJax.Node>x^8:x^8</MathJax.Node>
        </MathJax.Context>
      ),
      answers: [
        {
          id: 1,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>1</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 2,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>x^1</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 3,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>x^2</MathJax.Node>
            </MathJax.Context>
          ),
        },
      ],
      trueAnswerId: 1,
    },
    {
      id: 4,
      task:
        '4 задача, вычисли устно, используя формулы умножения и деления степеней с одинаковыми основаниями и возведение степени в степень',
      text: (
        <MathJax.Context input="ascii">
          <MathJax.Node>(p^3)^4</MathJax.Node>
        </MathJax.Context>
      ),
      answers: [
        {
          id: 1,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>p^1</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 2,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>p^7</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 3,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>p^12</MathJax.Node>
            </MathJax.Context>
          ),
        },
      ],
      trueAnswerId: 3,
    },
    {
      id: 5,
      task:
        '5 задача, вычисли устно, используя формулы умножения и деления степеней с одинаковыми основаниями и возведение степени в степень',
      text: (
        <MathJax.Context input="ascii">
          <MathJax.Node>b^6*b^4</MathJax.Node>
        </MathJax.Context>
      ),
      answers: [
        {
          id: 1,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>b^24</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 2,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>b^10</MathJax.Node>
            </MathJax.Context>
          ),
        },
        {
          id: 3,
          answerText: (
            <MathJax.Context input="ascii">
              <MathJax.Node>b^6.4</MathJax.Node>
            </MathJax.Context>
          ),
        },
      ],
      trueAnswerId: 2,
    },
  ],
};

export default TestPage;
