import os

class tools:
    def filetree(path="."):
        tree = []
        for dirs, subdirs, files in os.walk(path):
            for subdir in subdirs:
                tree.append(subdir)
            for file in files:
                full_path = os.path.join(dirs, file)
                tree.append(full_path)
        return tree

    def write_error(msg):
        with open('error.txt', 'a') as f:
            print(msg)
            f.write(msg + '\n')

    def write_warn(msg):
        with open('warn.txt', 'a') as f:
            print(msg)
            f.write(msg + '\n')