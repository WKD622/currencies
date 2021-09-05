import history from 'config/history';

/**
 * params has to be js object, example:
 * createUrlParamsFromObject ({date:'2019-11-19', ala: 'ala'})
 * result would be:
 * "date=2019-11-19&ala='ala'"
 * @param params Object
 */
function createUrlParamsFromObject(params) {
    let stringParams = '';
    for (const prop in params) {
        if (Object.prototype.hasOwnProperty.call(params, prop)) {
            stringParams += `${prop}=${params[prop]}&`;
        }
    }
    if (stringParams.slice(-1) === '&') {
        stringParams = stringParams.substring(0, stringParams.length - 1);
    }
    return stringParams;
}

/**
 * Example:
 * createPathFromSegmentsList([first_segment, second_segment])
 * the result would be:
 * /first_segment/second_segment
 * @param segmentsList {array}
 */
function createPathFromSegments(segmentsList) {
    let segmentsPath = '';
    segmentsList.forEach((segment) => segmentsPath += `/${segment}`);
    segmentsPath = segmentsPath.substr(1);
    return segmentsPath;
}

/**
 * params has to be js object, example:
 * createUrl (['report', 'example'], {date:'2019-11-19', ala: 'ala'})
 * result would be:
 * "/report/example?date=2019-11-19&ala='ala"
 * @param pathSegments {Array}
 * @param params Object
 * @returns {string}
 */
function createUrl(pathSegments, params) {
    const stringParams = createUrlParamsFromObject(params);
    const path = createPathFromSegments(pathSegments);
    return `${path}?${stringParams}`;
}

/**
 * params has to be js object, example:
 * navigateTo ('report', 'example', {date:'2019-11-19', ala: 'ala'}) the navigation result would be moving to:
 * "/report/example?date=2019-11-19&ala='ala"
 * @param pathSegments
 * @param params Object
 */
function navigateTo(pathSegments, params) {
    history.push(createUrl(pathSegments, params));
}

export {
    createUrl,
    navigateTo,
    createUrlParamsFromObject,
    createPathFromSegments,
};
