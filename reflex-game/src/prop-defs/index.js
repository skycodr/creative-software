import PropTypes from 'prop-types';

export const PositionProps = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
});

export const CellProps = PropTypes.shape({
  id: PropTypes.number,
  index: PropTypes.number,
  size: PropTypes.number,
  pos: PositionProps,
  cPos: PositionProps,
});

export const NodeProps = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: CellProps,
  nextId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});
