import {makeObservable, observable, action} from 'mobx';
import {
    CLEAR_CREATING_STATUSES,
    CLEAR_DELETING_STATUSES,
    CLEAR_FETCHING_STATUSES,
    CLEAR_UPDATING_STATUSES,
    CREATED,
    CREATING,
    CREATING_ERROR,
    DELETED,
    DELETING,
    DELETING_ERROR,
    FETCHED,
    FETCHING,
    FETCHING_ERROR,
    UPDATED,
    UPDATING,
    UPDATING_ERROR,
    NO_RESPONSE_FROM_SERVER,
} from './consts';

class ApiStore {
    fetched = false;
    fetching = false;
    updating = false;
    updated = false;
    creating = false;
    created = false;
    deleting = false;
    deleted = false;
    errorStatus = false;
    error = {};

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            error: observable,
            errorStatus: observable,
            fetched: observable,
            fetching: observable,
            updating: observable,
            updated: observable,
            creating: observable,
            created: observable,
            deleting: observable,
            deleted: observable,
            setFetched: action.bound,
            setFetching: action.bound,
            setErrorStatus: action.bound,
            setError: action.bound,
            storeError: action.bound,
            changeState: action.bound,
            clearError: action.bound,
            setUpdating: action.bound,
            setUpdated: action.bound,
            setCreated: action.bound,
            setCreating: action.bound,
            setDeleted: action.bound,
            setDeleting: action.bound,
            clearApiStatuses: action.bound,
        });
    }

    setFetched(newFetched) {
        this.fetched = newFetched;
    }

    setFetching(newFetching) {
        this.fetching = newFetching;
    }

    setErrorStatus(newErrorStatus) {
        this.errorStatus = newErrorStatus;
    }

    setError(newError) {
        this.error = newError;
    }

    setUpdating(newUpdating) {
        this.updating = newUpdating;
    }

    setUpdated(newUpdated) {
        this.updated = newUpdated;
    }

    setCreated(newCreated) {
        this.created = newCreated;
    }

    setCreating(newCreating) {
        this.creating = newCreating;
    }

    setDeleted(newDeleted) {
        this.deleted = newDeleted;
    }

    setDeleting(newDeleting) {
        this.deleting = newDeleting;
    }

    clearApiStatuses() {
        this.changeState(CLEAR_CREATING_STATUSES);
        this.changeState(CLEAR_DELETING_STATUSES);
        this.changeState(CLEAR_FETCHING_STATUSES);
        this.changeState(CLEAR_UPDATING_STATUSES);
    }

    storeError(error) {
        this.setErrorStatus(true);
        if (!error) {
            this.setError(NO_RESPONSE_FROM_SERVER);
        } else {
            this.setError(error);
        }
    }

    clearError() {
        this.setErrorStatus(false);
        this.setError({});
    }

    changeState(state, error = '') {
        switch (state) {
            case FETCHING:
                this.setFetching(true);
                this.setFetched(false);
                this.clearError();
                break;
            case FETCHED:
                this.setFetched(true);
                this.setFetching(false);
                break;
            case FETCHING_ERROR:
                this.setFetching(false);
                this.setFetched(false);
                this.storeError(error);
                break;
            case CLEAR_FETCHING_STATUSES:
                this.setFetching(false);
                this.setFetched(false);
                break;
            case DELETING:
                this.setDeleting(true);
                this.setDeleted(false);
                break;
            case DELETED:
                this.setDeleting(false);
                this.setDeleted(true);
                break;
            case DELETING_ERROR:
                this.setDeleting(false);
                this.setDeleted(false);
                this.storeError(error);
                break;
            case CLEAR_DELETING_STATUSES:
                this.setDeleting(false);
                this.setDeleted(false);
                break;
            case UPDATING:
                this.setUpdating(true);
                this.setUpdated(false);
                break;
            case UPDATED:
                this.setUpdating(false);
                this.setUpdated(true);
                break;
            case UPDATING_ERROR:
                this.setUpdating(false);
                this.setUpdated(false);
                this.storeError(error);
                break;
            case CLEAR_UPDATING_STATUSES:
                this.setUpdating(false);
                this.setUpdated(false);
                break;
            case CREATING:
                this.setCreating(true);
                this.setCreated(false);
                break;
            case CREATED:
                this.setCreating(false);
                this.setCreated(true);
                break;
            case CREATING_ERROR:
                this.setCreating(false);
                this.setCreated(false);
                this.storeError(error);
                break;
            case CLEAR_CREATING_STATUSES:
                this.setCreating(false);
                this.setCreated(false);
                break;
            default:
                break;
        }
    }
}

export default ApiStore;
