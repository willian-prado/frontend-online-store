import React, { Component } from 'react';
import Input from './Input';
import SaveInfos from './SaveInfos';

class FormsAvaliation extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      radioButton: '',
      comentario: '',
      saveEmail: [],
      saveRadioButton: [],
      saveComentario: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveAvaliation = this.saveAvaliation.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  saveAvaliation() {
    const { email, radioButton, comentario } = this.state;
    const retornoEmail = email;
    const retornaRadioButton = radioButton;
    const retornaComentario = comentario;
    this.setState((estadoAnterior) => ({
      saveEmail: (estadoAnterior.saveEmail
        ? [...estadoAnterior.saveEmail, retornoEmail] : retornoEmail),
      saveRadioButton: (estadoAnterior.saveRadioButton
        ? [...estadoAnterior.saveRadioButton, retornaRadioButton] : retornaRadioButton),
      saveComentario: (estadoAnterior.saveComentario
        ? [...estadoAnterior.saveComentario, retornaComentario] : retornaComentario),
    }));
  }

  render() {
    const {
      email,
      comentario,
      saveEmail,
      saveRadioButton,
      saveComentario,
    } = this.state;
    return (
      <div>
        <Input
          value={ email }
          type="text"
          id="emailInput"
          datatestid="emailInput"
          onChange={ this.handleChange }
          name="email"
          placeHolder="E-mail"
        />
        <Input
          value="1"
          type="radio"
          id="radio1"
          datatestid="radio1"
          onClick={ this.handleChange }
          name="radioButton"
        />
        <Input
          value="2"
          type="radio"
          id="radio2"
          datatestid="radio2"
          onClick={ this.handleChange }
          name="radioButton"
        />
        <Input
          value="3"
          type="radio"
          id="radio3"
          datatestid="radio3"
          onClick={ this.handleChange }
          name="radioButton"
        />
        <Input
          value="4"
          type="radio"
          id="radio4"
          datatestid="radio4"
          onClick={ this.handleChange }
          name="radioButton"
        />
        <Input
          value="5"
          type="radio"
          id="radio5"
          datatestid="radio5"
          onClick={ this.handleChange }
          name="radioButton"
        />
        <div>
          <textarea
            data-testid="product-detail-evaluation"
            value={ comentario }
            name="comentario"
            id="textInput"
            cols="30"
            rows="10"
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <button type="button" onClick={ this.saveAvaliation }>Avaliar</button>
        </div>
        <SaveInfos
          email={ saveEmail }
          radioButton={ saveRadioButton }
          comentario={ saveComentario }
        />
      </div>
    );
  }
}

export default FormsAvaliation;
