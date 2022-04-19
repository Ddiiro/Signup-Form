import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

import{Nav,Title,Paragraph,Form,} from './App'

ReactDom.render(<Nav/>, document.getElementById('nav'))
ReactDom.render(<Title/>, document.getElementById('title'))
ReactDom.render(<Paragraph/>, document.getElementById('paragraph'))
ReactDom.render(<Form/>, document.getElementById('root'))
