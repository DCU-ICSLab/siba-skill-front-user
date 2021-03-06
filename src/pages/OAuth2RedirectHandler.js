import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import { ACCESS_TOKEN } from '../constants';
import { parse } from 'query-string'
import { SetAuthorizationToken } from '../utils'

class OAuth2RedirectHandler extends Component {

    render() {
        
        let queryString = parse(this.props.location.search); // var를 대체하는 변수 let
        let token;
        let error;

        if(queryString)
            if(queryString.token){
                token = queryString.token
                SetAuthorizationToken(token) //request Header에 토큰 포함
            }
            else
                error = queryString.error

        //토큰 값이 존재 한다면
        if(token){
            localStorage.setItem(ACCESS_TOKEN, token)
            return <Redirect to="/main"/>
        }
        else{ //error라면
            return <Redirect to="/"/>
        }
    }
}

export default OAuth2RedirectHandler;