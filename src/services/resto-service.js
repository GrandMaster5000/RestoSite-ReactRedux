export default class RestoService {
    _apiBase = 'http://localhost:3000';

     async getResource(url) {
         const res = await fetch(`${this._apiBase}${url}`);

         if(!res.ok) {
             throw new Error (`Could not fetch ${this._apiBase}${url}`)
         }

         return await res.json();
     }

     getMenuItems = async () => {
        return await this.getResource('/menu/');
    }

}