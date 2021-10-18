import React from 'react';
import { connect } from 'react-redux';
import { filterTasks } from '../actions';

function FilterButtons({ filterTasks }) {
  return (
    <div>
      <button type="button" onClick={() => filterTasks('all')}>
        Todos
      </button>
      <button type="button" onClick={() => filterTasks('done')}>
        Completados
      </button>
      <button type="button" onClick={() => filterTasks('active')}>
        Em andamento
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  filterTasks: (filter) => dispatch(filterTasks(filter)),
});

export default connect(null, mapDispatchToProps)(FilterButtons);
