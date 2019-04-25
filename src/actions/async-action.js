export function loadData({url}) {
    return async (dispatch) => {
        dispatch(isLoading(true));
        let response = await fetch('${url}');
        if (response.status !== 200) {
            dispatch(error(true));
        } else {
            let data = await response.json();
            if (data.results.length < 1) {
                dispatch(error(true));
            } else {
                dispatch(setData(data));
            }
        }
    };
}