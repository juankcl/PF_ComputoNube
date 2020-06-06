@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private http: HtppClient) {}

	getAlbumes() {
		return this.http.get('https://jsonplaceholder.typicode.com/photos');
	}
}
