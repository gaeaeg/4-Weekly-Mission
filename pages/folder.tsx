import FolderHeader from "@/components/folder/FolderHeader";
import FolderMain from "@/components/folder/FolderMain";
import FolderList from "@/components/folder//FolderList";
import Footer from "@/components/common/Footer";

function Folder() {
  return (
    <div>
      <FolderHeader />
      <FolderMain />
      <FolderList />
      <Footer />
    </div>
  );
}

export default Folder;
