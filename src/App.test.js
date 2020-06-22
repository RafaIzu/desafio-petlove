import React from 'react'
import Enzyme, {shallow, ShallowWrapper} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'


Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = (props ={}, state =null) =>{
    const wrapper = shallow(<App{...props}/>)
    if(state) wrapper.setState(state)
    return wrapper
  }
  
  const findByTestAttr = (wrapper, val) =>{
    return wrapper.find(`[data-test="${val}"]`)
  }

test('renders of container', ()=>{
    const wrapper = setup()
    const container = findByTestAttr(wrapper, 'container-app')
    expect(container.length).toBe(1)    
    
})

test('renders of form', () =>{
    const wrapper = setup()
    const form = findByTestAttr(wrapper, 'form-app')
    expect(form.length).toBe(1)
})

test('renders of input',() =>{
        const wrapper = setup()
        const input = findByTestAttr(wrapper, 'input-app')
        expect(input.length).toBe(1) 
    })

test('renders of button',() =>{
    const wrapper = setup()
    const button =  findByTestAttr(wrapper, 'button-app')
    expect(button.length).toBe(1)    
})

test('renders of answer',() =>{
    const wrapper = setup()
    const answerForm = findByTestAttr(wrapper, 'answer-app')
    expect(answerForm.length).toBe(0)    
})

test('inital state of cep', ()=>{
    const wrapper = setup()
    const initialCepState = wrapper.state('cep')
    expect(initialCepState).toBe('')
})



