// import Modal from '@mui/material/Modal';
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const CustomModal = ({ showModal, setShowModal, children }) => {
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <Modal
      opened={showModal}
      onClose={onClose}
      withCloseButton={false}
      centered
      size="auto"
      // open={showModal}
      // onClose={onClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <div
        className={`flex items-center justify-center bg-[#ffffff00] z-[100]`}
      >
        {children}
      </div>
    </Modal>
  );
};
export default CustomModal;
