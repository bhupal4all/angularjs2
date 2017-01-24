# todo-app-aj2


## Exceptions

### EXCEPTION: No provider for Router! (RouterLink -> Router)
* include `ROUTER_PROVIDERS` while bootstarping the application
```typescript
import { ROUTER_PROVIDERS} from 'angular2/router'
bootstrap(AppComponent, [ROUTER_PROVIDERS]);
```

### EXCEPTION: Error during instantiation of LocationStrategy! (RouterLink -> Router -> Location -> LocationStrategy).
#### Error: No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document
* include base ref while bootstarping
* we can resolve this either through `base` tag at `index.html` 
```html
<base href="/">
```

* OR by adding base route provde at while bootstarping
  * set `APP_BASE_HREF` value
```typescript
import { ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router'
bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
```

* Refer [angular-2-router-no-base-href-set] (http://stackoverflow.com/questions/34535163/angular-2-router-no-base-href-set)
* Refer [angular2-component-router-basic-issue] (http://stackoverflow.com/questions/34653724/angular2-component-router-basic-issue)


### EXCEPTION: Component "AppComponent" has no route named "list"
* correct the routing configuration
* Routes array needs to have `path`, `name` and `component`
* use name while calling the route at `routerLink`

### Uncaught ReferenceError: System is not defined - when you reload the page from navigated route
* This would come becuase, we havent used any specific routing strategy
* as there is no specific strategy, on restart, request would interprets wrongly
* instead of navigated path, request would interpret at page request which is not exist
* To fix this issue, we need to use Location Strategy which is __Hash__
