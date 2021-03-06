import { call, put, select } from "redux-saga/effects";
import { ToastActionsCreators } from "react-native-redux-toast";
import ProductsActions from "~/store/ducks/products";
import api from "~/services/api";

export function* listProducts() {
  try {
    const { data } = yield call(api.get, "product");
    yield put(ProductsActions.productsListSuccess(data));
  } catch (err) {
    yield put(
      ToastActionsCreators.displayError(`Erro ao buscar os produtos. ${err}`)
    );
  }
}
