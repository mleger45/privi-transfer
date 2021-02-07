class User {

    constructor(httpResponse = {}){
        this.response = httpResponse;
    }


    getName(){
        throw Error("Not implemented");
    }

    getEmail(){
        throw Error("Not implemented");
    }

    getToken(){
        throw Error("Not implemented");
    }

    static createUser(httpResponse){
        if (httpResponse.hasOwnProperty("googleId")){
            return new GoogleUser(httpResponse);
        }else if(httpResponse.hasOwnProperty('graphDomain') && httpResponse.graphDomain === 'facebook'){
            return new FacebookUser(httpResponse);
        }else{
            return new PriviUser(httpResponse);
        }

    }
}

class FacebookUser extends User{
    getName(){
        return this.response.name;
    }

    getEmail(){
        return this.response.email;
    }
}

class GoogleUser extends User{
    getName(){
        return this.response.profileObj.name;
    }

    getEmail(){
        return this.response.profileObj.email;
    }
}

class PriviUser extends User {
    getName(){
        return "connect name";
    }

    getEmail(){
        return "connect email";
    }
}


export default User;